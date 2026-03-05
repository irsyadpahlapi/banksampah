import { createClient } from '@supabase/supabase-js';
import type { Kelurahan, BankSampahUnit } from '../stores/onboardingStore';

console.log("expo public supabase env",process.env.EXPO_PUBLIC_SUPABASE_URL);
console.log("expo public supabase anon key",process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY);
// Ganti dengan environment variable atau config yang aman di production
const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Fetch all kelurahan dari database
 * @returns Promise<Kelurahan[]> - Array of kelurahan
 */
export async function fetchKelurahan(): Promise<Kelurahan[]> {
  try {
    const { data, error } = await supabase
      .from('kelurahan')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching kelurahan:', error);
      throw new Error(`Gagal mengambil data kelurahan: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    console.error('Unexpected error fetching kelurahan:', error);
    throw error;
  }
}

/**
 * Fetch bank sampah units berdasarkan kelurahan_id
 * @param kelurahanId - UUID of kelurahan
 * @returns Promise<BankSampahUnit[]> - Array of bank sampah units
 */
export async function fetchBankSampahUnits(kelurahanId: string): Promise<BankSampahUnit[]> {
  try {
    if (!kelurahanId) {
      throw new Error('Kelurahan ID is required');
    }

    const { data, error } = await supabase
      .from('bank_sampah_units')
      .select('*')
      .eq('kelurahan_id', kelurahanId)
      .eq('is_active', true)
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching bank sampah units:', error);
      throw new Error(`Gagal mengambil data bank sampah: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    console.error('Unexpected error fetching bank sampah units:', error);
    throw error;
  }
}

/**
 * Save user's kelurahan and unit selection to profile
 * @param userId - User's UUID
 * @param kelurahanId - Selected kelurahan UUID
 * @param unitId - Selected bank sampah unit UUID
 */
export async function saveUserLocation(
  userId: string,
  kelurahanId: string,
  unitId: string
): Promise<void> {
  try {
    const { error } = await supabase
      .from('users')
      .update({
        kelurahan_id: kelurahanId,
        unit_id: unitId,
        updated_at: new Date().toISOString(),
      })
      .eq('id', userId);

    if (error) {
      console.error('Error saving user location:', error);
      throw new Error(`Gagal menyimpan lokasi: ${error.message}`);
    }
  } catch (error) {
    console.error('Unexpected error saving user location:', error);
    throw error;
  }
}