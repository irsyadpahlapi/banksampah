*** Rename File: e:\PROJECT\RAMOUZ\banksampah\docs_engginering\stories\01-form-login-nasabah.md
---
title: "User Story: Form Login Nasabah"
epic: "Epic 3: Authentication"
status: In Progress
author: AI (GitHub Copilot)
date: 2026-01-05
updated: 2026-01-08
---

# Story 01: Form Login Nasabah

**Skenario:**
Nasabah dapat login ke aplikasi menggunakan Google OAuth 1-tap.

**Acceptance Criteria:**
1. ✅ Terdapat halaman login yang menampilkan tombol "Login dengan Google".
2. ✅ Proses login menggunakan Supabase Auth (Google OAuth).
3. ✅ Setelah login berhasil, user diarahkan ke halaman yang sesuai (location selection atau home).
4. ✅ Jika login gagal, tampilkan pesan error yang jelas.
5. ⏳ Mendukung Mode Lansia (aksesibilitas, font besar, error sederhana) - Structure ready.

**Implementation Notes:**
- ✅ Google OAuth login implemented
- ✅ Auth callback handler with deep linking
- ✅ Post-login redirect based on onboarding status
- ✅ Integration with Story 02 (Location Selection)
- 🚫 **OTP Login SKIPPED** - Login dengan OTP phone number di-skip untuk sementara, fokus hanya Google OAuth

**File terkait:**
- app/auth/login.tsx (✅ Implemented)
- app/auth/callback.tsx (✅ Implemented)
- stores/authStore.ts (✅ Updated)
- lib/supabase.ts (✅ Configured)
- lib/auth-guard.ts (✅ Created)
