-- Migration: Create bank_sampah_units table
-- Description: Table untuk menyimpan data unit bank sampah per kelurahan
-- Author: Dev Team
-- Date: 2026-01-08

CREATE TABLE bank_sampah_units (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  kelurahan_id UUID NOT NULL REFERENCES kelurahan(id) ON DELETE CASCADE,
  address TEXT,
  phone TEXT,
  operator_name TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(name, kelurahan_id)
);

-- Enable Row Level Security
ALTER TABLE bank_sampah_units ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Everyone can read active bank sampah units
CREATE POLICY "Public can view active units"
  ON bank_sampah_units FOR SELECT
  USING (is_active = true);

-- RLS Policy: Operators can view their own unit
CREATE POLICY "Operators can view own unit"
  ON bank_sampah_units FOR SELECT
  USING ((auth.jwt()->>'role')::text = 'operator' AND id = (auth.jwt()->>'unit_id')::uuid);

-- RLS Policy: Admins can manage all units
CREATE POLICY "Admins can manage units"
  ON bank_sampah_units FOR ALL
  USING ((auth.jwt()->>'role')::text = 'admin');

-- Create indexes
CREATE INDEX idx_bank_sampah_units_kelurahan ON bank_sampah_units(kelurahan_id);
CREATE INDEX idx_bank_sampah_units_active ON bank_sampah_units(is_active);

-- Add trigger for updated_at
CREATE TRIGGER update_bank_sampah_units_updated_at
  BEFORE UPDATE ON bank_sampah_units
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
