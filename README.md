# banksampah
Aplikasi management bank sampah

## Cara Instalasi & Persiapan

### 1. Persiapan Tools
- Pastikan sudah install Node.js (versi terbaru direkomendasikan)
- Install Expo CLI secara global:
  ```sh
  npm install -g expo-cli
  ```
- Install Android Studio (untuk emulator & SDK/NDK)
- Pastikan sudah install USB driver untuk device Android

### 2. Persiapan SDK/NDK
- Buka Android Studio > Settings > SDK Manager
- Pastikan sudah install:
  - Android SDK Build-Tools: **36.0.0**   <!-- versi build tools -->
  - Android SDK Platform: **API 36**      <!-- versi platform SDK -->
  - NDK: **27.1.12297006**                <!-- versi NDK -->
  - Kotlin: **2.1.20**                    <!-- otomatis terinstall, versi bisa diatur di build.gradle -->
  - KSP: **2.1.20-2.0.1**                 <!-- otomatis terinstall, versi bisa diatur di build.gradle -->
- Set minSdk: **24**                      <!-- minimal versi Android -->
- Set targetSdk: **36**                   <!-- target versi Android -->
- Set compileSdk: **36**                  <!-- versi SDK untuk compile -->

### 3. Instalasi Dependensi
Masuk ke folder project:
```sh
cd docs_engginering/BankSampah
npm install
```

### 4. Menjalankan Aplikasi
#### a. Menggunakan Expo Go (Hot Reload)
- Jalankan perintah berikut:
  ```sh
  npx expo start
  ```
- Scan QR code dengan aplikasi Expo Go di HP

#### b. Run di Device Android via USB
- Aktifkan mode developer & USB debugging di HP
- Hubungkan HP ke PC
- Jalankan:
  ```sh
  npm run android
  ```

### 5. Troubleshooting
- Jika build error, cek versi SDK/NDK di Android Studio
- Pastikan device terdeteksi dengan perintah:
  ```sh
  adb devices
  ```
- Untuk masalah dependency, jalankan:
  ```sh
  npm install
  ```

---

**Catatan:** Semua konfigurasi di atas sudah disesuaikan agar project siap dijalankan tanpa setup tambahan. Jika ada kendala, cek log error di terminal dan pastikan versi tools sesuai tabel di atas.
- Kotlin & KSP akan otomatis terinstall oleh Android Studio dan diatur melalui file build.gradle project. Tidak perlu instal manual.
