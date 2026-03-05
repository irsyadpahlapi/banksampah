---
title: "User Story: Kelurahan & Bank Sampah Unit Selection"
epic: "Epic 2: User Authentication & Onboarding"
status: Ready for Review
author: AI (GitHub Copilot)
date: 2026-01-08
updated: 2026-01-08
---

# Story: Kelurahan & Bank Sampah Unit Selection

**Skenario:**
Nasabah dapat memilih kelurahan dan unit bank sampah yang sesuai selama proses onboarding.

**Acceptance Criteria:**
1. ✅ Terdapat dropdown untuk memilih kelurahan berdasarkan daftar yang tersedia.
2. ✅ Setelah kelurahan dipilih, dropdown kedua menampilkan daftar unit bank sampah yang tersedia di kelurahan tersebut.
3. ✅ Sistem menyimpan pilihan kelurahan dan unit bank sampah ke profil nasabah.
4. ✅ Jika tidak ada unit bank sampah di kelurahan yang dipilih, tampilkan pesan "Belum tersedia unit bank sampah di kelurahan ini."
5. ⏳ Mendukung Mode Lansia (aksesibilitas, font besar, error sederhana) - Basic structure ready, needs lansia mode implementation.

**Catatan Teknis:**
- UI: Dropdown terhubung (dependent dropdowns) untuk kelurahan dan unit bank sampah.
- Backend: Endpoint untuk mengambil daftar kelurahan dan unit bank sampah.
- Validasi: Kelurahan dan unit bank sampah wajib dipilih sebelum melanjutkan.
- Data disimpan di tabel `users` pada Supabase dengan kolom `kelurahan_id` dan `unit_id`.

**Implementation Details:**

### Database
- ✅ `supabase/migrations/20260108000001_create_kelurahan.sql` - Kelurahan table with RLS policies
- ✅ `supabase/migrations/20260108000002_create_bank_sampah_units.sql` - Bank sampah units table with RLS policies
- ✅ `supabase/migrations/20260108000003_add_location_to_users.sql` - Add location fields to users table
- ✅ `supabase/seed.sql` - Sample data: 5 kelurahan, 9 bank sampah units

### State Management
- ✅ `stores/onboardingStore.ts` - Zustand store with persist middleware for onboarding state
- ✅ `stores/authStore.ts` - Updated with User type export, kelurahan_id/unit_id fields, isOnboardingComplete state

### API Helpers
- ✅ `lib/supabase.ts` - Added fetchKelurahan(), fetchBankSampahUnits(), saveUserLocation()
- ✅ `lib/auth-guard.ts` - Auth guard utilities: useRequireOnboarding(), checkOnboardingComplete(), getPostLoginRedirect()

### UI Components
- ✅ `app/onboarding/location-selection.tsx` - Location selection screen with dependent dropdowns, integrated with authStore

### Integration
- ✅ `app/auth/login.tsx` - Updated to redirect based on onboarding status after OTP verification
- ✅ `app/auth/callback.tsx` - Updated to redirect based on onboarding status after Google login

### Tests
- ✅ `__tests__/onboardingStore.test.ts` - Unit tests for onboarding store (10+ test cases)
- ✅ `__tests__/auth-guard.test.ts` - Unit tests for auth guard (9 test cases)

**File terkait:**
- app/onboarding/location-selection.tsx
- app/auth/login.tsx
- app/auth/callback.tsx
- stores/onboardingStore.ts
- stores/authStore.ts
- lib/supabase.ts
- lib/auth-guard.ts
- supabase/migrations/20260108000001_create_kelurahan.sql
- supabase/migrations/20260108000002_create_bank_sampah_units.sql
- supabase/migrations/20260108000003_add_location_to_users.sql
- supabase/seed.sql
- __tests__/onboardingStore.test.ts
- __tests__/auth-guard.test.ts

**Integration with Story 01:**
✅ Seamless flow from login → location selection → home screen
- Login screen redirects to location selection if onboarding incomplete
- Location selection updates both authStore and onboardingStore
- Auth guard ensures protected routes require completed onboarding

**Pending:**
- Mode Lansia accessibility enhancements (24pt font, high contrast, simplified errors)
- Integration tests for location selection component
- E2E test for complete onboarding flow