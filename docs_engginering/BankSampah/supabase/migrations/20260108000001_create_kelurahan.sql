-- Migration: Create kelurahan table
-- Description: Table untuk menyimpan data kelurahan di Jakarta
-- Author: Dev Team
-- Date: 2026-01-08

CREATE TABLE kelurahan (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  kecamatan TEXT,
  kota TEXT DEFAULT 'Jakarta',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE kelurahan ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Everyone can read kelurahan data (public data)
CREATE POLICY "Public can view kelurahan"
  ON kelurahan FOR SELECT
  USING (true);

-- RLS Policy: Only admins can insert/update/delete kelurahan
CREATE POLICY "Admins can manage kelurahan"
  ON kelurahan FOR ALL
  USING ((auth.jwt()->>'role')::text = 'admin');

-- Create index for faster lookups
CREATE INDEX idx_kelurahan_name ON kelurahan(name);

-- Add trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_kelurahan_updated_at
  BEFORE UPDATE ON kelurahan
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
