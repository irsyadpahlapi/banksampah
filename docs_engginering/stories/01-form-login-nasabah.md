*** Rename File: e:\PROJECT\RAMOUZ\banksampah\docs_engginering\stories\01-form-login-nasabah.md
---
title: "User Story: Form Login Nasabah"
epic: "Epic 3: Authentication"
status: Draft
author: AI (GitHub Copilot)
date: 2026-01-05
---

# Story 01: Form Login Nasabah

**Skenario:**
Nasabah dapat login ke aplikasi menggunakan Google OAuth 1-tap atau OTP nomor HP.

**Acceptance Criteria:**
1. Terdapat halaman login yang menampilkan tombol "Login dengan Google" dan "Login dengan OTP".
2. Proses login menggunakan Supabase Auth (Google OAuth & Phone OTP).
3. Setelah login berhasil, user diarahkan ke halaman utama.
4. Jika login gagal, tampilkan pesan error yang jelas.
5. Mendukung Mode Lansia (aksesibilitas, font besar, error sederhana).

**File terkait:**
- app/auth/login.tsx
- stores/authStore.ts
- lib/supabase.ts
