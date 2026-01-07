## Story 03: Nasabah mengunggah foto dokumentasi deposit

### Judul
Nasabah mengunggah foto dokumentasi pada saat melakukan deposit sampah.

### Deskripsi
Sebagai Nasabah, saya ingin dapat mengunggah foto dokumentasi setiap kali melakukan deposit sampah, agar transaksi dapat diverifikasi dan didokumentasikan dengan baik.

### Acceptance Criteria
1. Tersedia fitur upload foto pada proses deposit.
2. Foto wajib diunggah sebelum transaksi dapat dilanjutkan.
3. Foto disimpan di Supabase Storage dengan kompresi otomatis.
4. Foto dapat dilihat kembali pada riwayat transaksi.

### Catatan Teknis
- UI: Komponen upload foto (kamera/galeri).
- Validasi: File gambar, ukuran maksimal sesuai kebijakan.
- Backend: Simpan ke Supabase Storage, kompresi otomatis, retensi 90 hari.