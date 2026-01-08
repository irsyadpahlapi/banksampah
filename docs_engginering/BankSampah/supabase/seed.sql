-- Seed Data for BankSampah
-- Description: Sample data untuk kelurahan dan bank sampah units
-- Author: Dev Team
-- Date: 2026-01-08

-- Insert Kelurahan (5 kelurahan di Jakarta)
INSERT INTO kelurahan (id, name, kecamatan, kota) VALUES
  ('550e8400-e29b-41d4-a716-446655440001', 'Kebon Jeruk', 'Kebon Jeruk', 'Jakarta Barat'),
  ('550e8400-e29b-41d4-a716-446655440002', 'Tanah Abang', 'Tanah Abang', 'Jakarta Pusat'),
  ('550e8400-e29b-41d4-a716-446655440003', 'Menteng', 'Menteng', 'Jakarta Pusat'),
  ('550e8400-e29b-41d4-a716-446655440004', 'Cikini', 'Menteng', 'Jakarta Pusat'),
  ('550e8400-e29b-41d4-a716-446655440005', 'Senen', 'Senen', 'Jakarta Pusat')
ON CONFLICT (id) DO NOTHING;

-- Insert Bank Sampah Units
-- Kebon Jeruk units
INSERT INTO bank_sampah_units (id, name, kelurahan_id, address, phone, operator_name, is_active) VALUES
  ('650e8400-e29b-41d4-a716-446655440001', 'Bank Sampah Kebon Jeruk Mandiri', '550e8400-e29b-41d4-a716-446655440001', 'Jl. Kebon Jeruk Raya No. 45', '081234567801', 'Pak Budi', true),
  ('650e8400-e29b-41d4-a716-446655440002', 'Bank Sampah Hijau Lestari', '550e8400-e29b-41d4-a716-446655440001', 'Jl. Perjuangan No. 12', '081234567802', 'Bu Siti', true)
ON CONFLICT (id) DO NOTHING;

-- Tanah Abang units
INSERT INTO bank_sampah_units (id, name, kelurahan_id, address, phone, operator_name, is_active) VALUES
  ('650e8400-e29b-41d4-a716-446655440003', 'Bank Sampah Tanah Abang Bersih', '550e8400-e29b-41d4-a716-446655440002', 'Jl. KH. Mas Mansyur No. 23', '081234567803', 'Pak Andi', true),
  ('650e8400-e29b-41d4-a716-446655440004', 'Bank Sampah Melati Putih', '550e8400-e29b-41d4-a716-446655440002', 'Jl. Kebon Kacang No. 8', '081234567804', 'Bu Ratna', true)
ON CONFLICT (id) DO NOTHING;

-- Menteng units
INSERT INTO bank_sampah_units (id, name, kelurahan_id, address, phone, operator_name, is_active) VALUES
  ('650e8400-e29b-41d4-a716-446655440005', 'Bank Sampah Menteng Asri', '550e8400-e29b-41d4-a716-446655440003', 'Jl. Menteng Raya No. 56', '081234567805', 'Pak Hendra', true),
  ('650e8400-e29b-41d4-a716-446655440006', 'Bank Sampah Cempaka', '550e8400-e29b-41d4-a716-446655440003', 'Jl. Cikini Raya No. 34', '081234567806', 'Bu Dewi', true)
ON CONFLICT (id) DO NOTHING;

-- Cikini units
INSERT INTO bank_sampah_units (id, name, kelurahan_id, address, phone, operator_name, is_active) VALUES
  ('650e8400-e29b-41d4-a716-446655440007', 'Bank Sampah Cikini Sejahtera', '550e8400-e29b-41d4-a716-446655440004', 'Jl. Cikini IV No. 10', '081234567807', 'Pak Joko', true)
ON CONFLICT (id) DO NOTHING;

-- Senen units
INSERT INTO bank_sampah_units (id, name, kelurahan_id, address, phone, operator_name, is_active) VALUES
  ('650e8400-e29b-41d4-a716-446655440008', 'Bank Sampah Senen Makmur', '550e8400-e29b-41d4-a716-446655440005', 'Jl. Senen Raya No. 78', '081234567808', 'Pak Agus', true),
  ('650e8400-e29b-41d4-a716-446655440009', 'Bank Sampah Bintang Timur', '550e8400-e29b-41d4-a716-446655440005', 'Jl. Kramat Raya No. 99', '081234567809', 'Bu Linda', true)
ON CONFLICT (id) DO NOTHING;
