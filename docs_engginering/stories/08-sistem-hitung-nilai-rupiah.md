## Story 05: Sistem menghitung nilai Rupiah berdasarkan harga/kg

### Judul
Sistem menghitung nilai Rupiah deposit berdasarkan harga/kg yang dikonfigurasi admin.

### Deskripsi
Sebagai sistem, saya ingin secara otomatis menghitung nilai Rupiah dari berat sampah yang didepositkan berdasarkan harga per kg yang dikonfigurasi oleh admin, agar nilai transaksi selalu akurat dan transparan.

### Acceptance Criteria
1. Harga/kg dapat dikonfigurasi oleh admin per jenis sampah.
2. Sistem menghitung total nilai Rupiah = berat × harga/kg.
3. Nilai Rupiah tampil di UI sebelum transaksi dikonfirmasi.
4. Perubahan harga tidak berlaku surut (hanya transaksi baru).

### Catatan Teknis
- Backend: Harga/kg tersimpan di database, update via admin portal.
- Perhitungan dilakukan di backend dan diverifikasi di frontend.