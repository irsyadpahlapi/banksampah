
### Judul
Developer melakukan inisialisasi dan instalasi aplikasi BankSampah menggunakan Expo CLI dan konfigurasi awal.

### Deskripsi
Sebagai developer, saya ingin dapat menginisialisasi dan menginstal aplikasi BankSampah dengan struktur dan dependensi yang sesuai arsitektur, agar pengembangan dapat dimulai dengan fondasi yang benar dan siap untuk integrasi fitur selanjutnya.


### Acceptance Criteria
1. Developer dapat menjalankan perintah inisialisasi project Expo:
   - `npx create-expo-app@latest BankSampah --template blank-typescript`
   - `cd BankSampah`
2. Struktur project mengikuti ketentuan arsitektur berikut:
   - Wajib memiliki folder dan struktur:
     - `app/` (routing dan screen utama, subfolder: (tabs)/, auth/, transaction/)
     - `components/` (komponen reusable, subfolder: transactions/, balances/, gamification/, shared/)
     - `stores/` (state management Zustand: authStore.ts, balanceStore.ts, transactionStore.ts, gamificationStore.ts, uiStore.ts, offlineQueueStore.ts)
     - `lib/` (supabase.ts, constants.ts, formatters.ts, validators.ts, helpers.ts)
     - `types/` (database.ts, api.ts, models.ts)
     - `assets/` (images/, fonts/, icons/)
     - `supabase/` (functions/, migrations/)
     - File konfigurasi: `.env.example`, `.env.development`, `app.json`, `eas.json`, `package.json`, `tsconfig.json`
   - Struktur dan penamaan folder/file mengikuti contoh di architecture.md.
3. Developer dapat menginstal dependensi utama:
   - Supabase client: `npx expo install @supabase/supabase-js @react-native-async-storage/async-storage`
   - React Navigation: `npx expo install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/stack`
   - Zustand: `npm install zustand`
   - NativeBase: `npm install native-base`
   - Expo modules: `npx expo install expo-notifications expo-device expo-image-picker`
4. Developer dapat menjalankan aplikasi di perangkat/emulator dengan `npm start` dan Expo Go.
5. Konfigurasi TypeScript strict mode aktif (tsconfig.json).
6. File environment `.env.example` tersedia dan dapat dikonfigurasi untuk Supabase URL dan Anon Key.
7. Dokumentasi langkah inisialisasi, struktur folder, dan instalasi tersedia di README project.

### Catatan Teknis

# Story 00: Inisiasi & Instalasi Aplikasi

**Skenario:**
Developer melakukan inisialisasi dan instalasi aplikasi BankSampah sesuai arsitektur.

**Acceptance Criteria:**
1. Project Expo berhasil diinisialisasi dan dijalankan (`npm start`).
2. Struktur folder utama sesuai arsitektur (app/, components/, stores/, lib/, types/, assets/, supabase/).
3. Dependensi utama terinstal (Supabase, Navigation, Zustand, NativeBase, Expo modules).
4. Tersedia file konfigurasi dasar (tsconfig.json, app.json, .env.example, package.json, eas.json).
5. Dokumentasi setup tersedia di README.

**File terkait:**
- Semua struktur root project