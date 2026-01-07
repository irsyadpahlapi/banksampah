## Story 10: Data transaksi dan foto tersimpan di Supabase Storage dengan kompresi dan retensi

### Judul
Data transaksi dan foto dokumentasi tersimpan di Supabase Storage dengan kompresi dan retensi 90 hari.

### Deskripsi
Sebagai sistem, saya ingin setiap data transaksi dan foto dokumentasi deposit tersimpan di Supabase Storage dengan kompresi otomatis dan kebijakan retensi 90 hari, agar biaya penyimpanan terkendali dan data tetap tersedia untuk audit.

### Acceptance Criteria
1. Setiap foto deposit dikompresi sebelum disimpan.
2. Foto dan data transaksi disimpan di Supabase Storage.
3. Foto otomatis dihapus setelah 90 hari, metadata tetap tersimpan.
4. Data transaksi tetap dapat diakses meski foto sudah dihapus.

### Catatan Teknis
- Backend: Pipeline kompresi gambar, scheduled job untuk hapus foto lama.
- Metadata foto tetap di database meski file dihapus.