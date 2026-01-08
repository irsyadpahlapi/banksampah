-- Migration: Add location fields to users table
-- Description: Add kelurahan_id and unit_id columns to users table for onboarding
-- Author: Dev Team
-- Date: 2026-01-08

-- Check if users table exists, if not create it
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE,
  phone TEXT UNIQUE,
  role TEXT NOT NULL DEFAULT 'nasabah' CHECK (role IN ('nasabah', 'operator', 'buyer', 'admin')),
  full_name TEXT,
  mode_lansia_enabled BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Add kelurahan_id column if not exists
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'users' AND column_name = 'kelurahan_id'
  ) THEN
    ALTER TABLE users ADD COLUMN kelurahan_id UUID REFERENCES kelurahan(id);
  END IF;
END $$;

-- Add unit_id column if not exists
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'users' AND column_name = 'unit_id'
  ) THEN
    ALTER TABLE users ADD COLUMN unit_id UUID REFERENCES bank_sampah_units(id);
  END IF;
END $$;

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_kelurahan ON users(kelurahan_id);
CREATE INDEX IF NOT EXISTS idx_users_unit ON users(unit_id);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

-- Enable Row Level Security if not already enabled
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view own profile" ON users;
DROP POLICY IF EXISTS "Users can update own profile" ON users;
DROP POLICY IF EXISTS "Operators can view users in their unit" ON users;
DROP POLICY IF EXISTS "Admins can view all users" ON users;

-- RLS Policy: Users can view their own profile
CREATE POLICY "Users can view own profile"
  ON users FOR SELECT
  USING (auth.uid() = id);

-- RLS Policy: Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  USING (auth.uid() = id);

-- RLS Policy: Operators can view users in their unit
CREATE POLICY "Operators can view users in their unit"
  ON users FOR SELECT
  USING (
    (auth.jwt()->>'role')::text = 'operator' 
    AND unit_id = (auth.jwt()->>'unit_id')::uuid
  );

-- RLS Policy: Admins can view all users
CREATE POLICY "Admins can view all users"
  ON users FOR ALL
  USING ((auth.jwt()->>'role')::text = 'admin');

-- Add trigger for updated_at if not exists
DROP TRIGGER IF EXISTS update_users_updated_at ON users;
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add comment to table
COMMENT ON TABLE users IS 'User profiles with location (kelurahan and bank sampah unit)';
COMMENT ON COLUMN users.kelurahan_id IS 'Reference to kelurahan where user is located';
COMMENT ON COLUMN users.unit_id IS 'Reference to bank sampah unit user is assigned to';
