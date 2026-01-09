# Cerita: Tutorial Onboarding 3-Layar

## Epik: Autentikasi & Onboarding Pengguna

### Kebutuhan Fungsional
FR4: Pengguna dapat menyelesaikan tutorial onboarding 3-layar dalam waktu kurang dari 60 detik.

### Cerita Pengguna
Sebagai **pengguna baru**,
Saya ingin **menyelesaikan tutorial onboarding 3-layar yang cepat dan menarik**,
sehingga **saya dapat memahami fitur utama aplikasi dan mulai menggunakannya dengan segera**.

### Kriteria Penerimaan
1. **Layar 1: Selamat Datang & Gambaran Umum Aplikasi**
   - Menampilkan pesan selamat datang dan sorotan aplikasi.
   - Menyediakan tombol "Lanjut" untuk melanjutkan.
   - Animasi atau ilustrasi untuk membuatnya menarik secara visual.

2. **Layar 2: Penjelasan Fitur Utama**
   - Menyoroti fitur utama aplikasi (misalnya, setor sampah, pelacakan saldo, gamifikasi).
   - Menyediakan tombol "Lanjut" untuk melanjutkan.

3. **Layar 3: Mulai**
   - Meminta pengguna untuk memilih peran mereka (Nasabah/Operator).
   - Menyediakan tombol "Mulai" untuk menyelesaikan onboarding.

4. **Performa**
   - Alur onboarding harus dapat diselesaikan dalam waktu kurang dari 60 detik.

5. **Aksesibilitas**
   - Mendukung Mode Lansia (font 24pt, kontras tinggi, panduan suara).

### Catatan Implementasi
- **Keselarasan Arsitektur**:
  - Gunakan React Navigation untuk transisi antar layar.
  - Simpan status penyelesaian onboarding di `authStore` (Zustand).
  - Pastikan animasi ringan untuk memenuhi kebutuhan performa.

- **Panduan Desain**:
  - Ikuti spesifikasi desain UX untuk Tingkat UX Progresif.
  - Gunakan warna utama aplikasi (Hijau Zamrud #10B981) dan tipografi (font Inter).

- **Detail Teknis**:
  - Layar diimplementasikan sebagai komponen React.
  - Gunakan `expo-device` dari Expo untuk optimasi perangkat.
  - Tambahkan pelacakan analitik (PostHog) untuk tingkat penyelesaian onboarding.

### Tugas
1. Buat komponen React untuk tiga layar onboarding.
2. Implementasikan alur navigasi menggunakan React Navigation.
3. Tambahkan manajemen status Zustand untuk penyelesaian onboarding.
4. Integrasikan animasi/ilustrasi sesuai desain.
5. Uji performa untuk memastikan alur selesai dalam waktu kurang dari 60 detik.
6. Validasi kepatuhan aksesibilitas (Mode Lansia).
7. Tambahkan pelacakan analitik untuk metrik onboarding.

### Definisi Selesai
- Semua kriteria penerimaan terpenuhi.
- Kode telah ditinjau dan digabungkan ke cabang `feat/banksampah`.
- Alur onboarding telah diuji pada perangkat Android dan iOS.
- Data analitik untuk penyelesaian onboarding terlihat di PostHog.