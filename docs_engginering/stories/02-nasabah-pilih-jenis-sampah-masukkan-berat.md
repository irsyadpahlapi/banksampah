## Story 02: Nasabah memilih jenis sampah dan memasukkan berat

### Judul
Nasabah memilih jenis sampah dan memasukkan berat sampah pada proses deposit.

### Deskripsi
Sebagai Nasabah, saya ingin dapat memilih jenis sampah (Plastik PET/HDPE, Kertas, Logam, Kaca) dan memasukkan berat sampah yang akan saya depositkan, agar proses pencatatan transaksi berjalan akurat sesuai kategori dan berat sebenarnya.

### Acceptance Criteria
1. Tersedia pilihan jenis sampah sesuai kategori.
2. Nasabah dapat memasukkan berat sampah (dalam kg) secara manual.
3. Validasi input berat tidak boleh kosong atau nol.
4. Data jenis dan berat sampah diteruskan ke proses selanjutnya (foto, verifikasi operator).

### Catatan Teknis
- UI: Dropdown/selector untuk jenis sampah, input number untuk berat.
- Validasi: Berat > 0, jenis sampah wajib dipilih.
- Data dikirim ke backend untuk proses transaksi.