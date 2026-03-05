# Cerita 2.5: Alur Verifikasi Operator

## Cerita Pengguna

Sebagai seorang **operator**,  
Saya ingin **diverifikasi dan disetujui oleh admin sebelum saya dapat mengakses fitur operator**,  
Sehingga **hanya operator yang sah yang dapat memproses transaksi**.

---

## Kriteria Penerimaan

1. **Pengajuan Permintaan**:
   - Diberikan bahwa saya telah terdaftar sebagai pengguna (melalui Google atau Telepon dari Cerita 2.1/2.2),
   - Ketika saya mengajukan peningkatan peran operator di pengaturan Profil,
   - Maka permintaan verifikasi saya dibuat di tabel `operator_requests` dengan `status='pending'`.

2. **Tinjauan Admin**:
   - Diberikan bahwa admin mengakses dashboard admin Retool,
   - Ketika mereka melihat profil saya, nomor telepon, dan permintaan penugasan unit,
   - Maka mereka dapat menyetujui atau menolak permintaan saya.

3. **Notifikasi Persetujuan**:
   - Diberikan bahwa permintaan saya disetujui,
   - Ketika admin memperbarui status menjadi `approved`,
   - Maka `users.role` saya diperbarui menjadi `operator`.
   - Dan saya menerima notifikasi push: "Akun operator Anda telah diaktifkan!"

4. **Notifikasi Penolakan**:
   - Diberikan bahwa permintaan saya ditolak,
   - Ketika admin memperbarui status menjadi `rejected`,
   - Maka saya menerima notifikasi push dengan alasan penolakan.

5. **Akses Fitur**:
   - Diberikan bahwa peran saya diperbarui menjadi `operator`,
   - Ketika saya masuk kembali,
   - Maka saya dapat mengakses layar khusus operator (misalnya, pemrosesan transaksi, dashboard).

---

## Catatan Implementasi

1. **Skema Basis Data**:
   - Tabel `operator_requests`:
     - Kolom: `id`, `user_id`, `unit_id`, `status` (pending/approved/rejected), `created_at`, `updated_at`.
   - Tabel `users`:
     - Perbarui kolom `role` untuk menyertakan `operator`.

2. **Dashboard Admin**:
   - Gunakan Retool untuk antarmuka admin.
   - Tampilkan permintaan yang tertunda dengan detail pengguna dan penugasan unit.
   - Tindakan menyetujui/menolak memperbarui tabel `operator_requests`.

3. **Notifikasi**:
   - Notifikasi push melalui Firebase Cloud Messaging.
   - Sertakan pesan lokal untuk persetujuan/penolakan.

4. **Kontrol Akses Berbasis Peran (RBAC)**:
   - Perbarui token JWT untuk menyertakan `role=operator`.
   - Terapkan kontrol akses berbasis peran di aplikasi (misalnya, layar khusus operator).

---

## Ketergantungan

- **Supabase**:
  - Autentikasi untuk peran pengguna.
  - Basis data untuk tabel `operator_requests`.
- **Retool**:
  - Dashboard admin untuk pengelolaan permintaan.
- **Firebase Cloud Messaging**:
  - Notifikasi push untuk pembaruan persetujuan/penolakan.

---

## Persyaratan Non-Fungsional

- **NFR-S3**: Keamanan Autentikasi = 99,99%.
- **NFR-S2**: Integritas Data = 100%.
- **NFR-R2**: Pengiriman Notifikasi Push = 95%.

---

## Pertanyaan Terbuka

1. Metadata tambahan apa yang harus disertakan dalam tabel `operator_requests` (misalnya, alasan penolakan)?
2. Haruskah operator diminta untuk mengunggah dokumen verifikasi (misalnya, KTP, bukti afiliasi)?