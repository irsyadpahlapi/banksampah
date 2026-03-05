# Setup Guide - Story 02 Database

## Database Migrations Required ⚠️

Sebelum menggunakan fitur Location Selection, database migrations harus dijalankan terlebih dahulu di Supabase.

### Steps to Run Migrations

#### Option 1: Via Supabase Dashboard (Recommended)

1. Login ke **Supabase Dashboard**: https://supabase.com/dashboard
2. Pilih project: **umdsdqhxtqlkdcvuiwtu**
3. Buka **SQL Editor** di sidebar
4. Run migrations satu per satu:

**Migration 1: Create Kelurahan Table**
```sql
-- File: supabase/migrations/20260108000001_create_kelurahan.sql
-- Copy paste isi file ini ke SQL Editor dan Run
```

**Migration 2: Create Bank Sampah Units Table**
```sql
-- File: supabase/migrations/20260108000002_create_bank_sampah_units.sql  
-- Copy paste isi file ini ke SQL Editor dan Run
```

**Migration 3: Add Location Fields to Users**
```sql
-- File: supabase/migrations/20260108000003_add_location_to_users.sql
-- Copy paste isi file ini ke SQL Editor dan Run
```

**Migration 4: Seed Data**
```sql
-- File: supabase/seed.sql
-- Copy paste isi file ini ke SQL Editor dan Run
```

#### Option 2: Via Supabase CLI

```bash
# 1. Install Supabase CLI (if not installed)
npm install -g supabase

# 2. Login to Supabase
supabase login

# 3. Link to your project
supabase link --project-ref umdsdqhxtqlkdcvuiwtu

# 4. Push migrations
supabase db push

# 5. Run seed data (manually via dashboard)
```

### Verification

After running migrations, verify in SQL Editor:

```sql
-- Check kelurahan table
SELECT * FROM kelurahan;
-- Expected: 5 records

-- Check bank_sampah_units table
SELECT * FROM bank_sampah_units;
-- Expected: 9 records

-- Check users table columns
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'users' 
  AND column_name IN ('kelurahan_id', 'unit_id');
-- Expected: 2 records

-- Check RLS policies
SELECT tablename, policyname 
FROM pg_policies 
WHERE tablename IN ('kelurahan', 'bank_sampah_units');
-- Expected: Multiple policies
```

### Current Error

```
ERROR  Error fetching kelurahan: {
  "code": "PGRST205",
  "message": "Could not find the table 'public.kelurahan' in the schema cache"
}
```

**Root Cause**: Migrations belum dijalankan di Supabase database.

**Solution**: Run migrations menggunakan salah satu option di atas.

### Migration Files Location

```
docs_engginering/BankSampah/supabase/
├── migrations/
│   ├── 20260108000001_create_kelurahan.sql
│   ├── 20260108000002_create_bank_sampah_units.sql
│   └── 20260108000003_add_location_to_users.sql
└── seed.sql
```

### Post-Migration Checklist

- [ ] Run migration 1 (kelurahan table)
- [ ] Run migration 2 (bank_sampah_units table)
- [ ] Run migration 3 (users table update)
- [ ] Run seed data
- [ ] Verify tables exist
- [ ] Verify RLS policies active
- [ ] Test app - location selection should load kelurahan data

### Notes

- Migrations only need to be run once per environment (development/production)
- Seed data is for development/testing only
- Production will need real kelurahan and unit data
- After migrations, restart the app to see changes

---

**Status**: ⚠️ **BLOCKED** - Waiting for database migrations to be executed
**Next Action**: Run migrations in Supabase Dashboard or via CLI
