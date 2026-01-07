import { createClient } from '@supabase/supabase-js';
console.log("expo public supabase env",process.env.EXPO_PUBLIC_SUPABASE_URL);
console.log("expo public supabase anon key",process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY);
// Ganti dengan environment variable atau config yang aman di production
const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);