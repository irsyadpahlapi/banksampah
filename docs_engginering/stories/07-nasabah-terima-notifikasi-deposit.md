## Story 08: Nasabah menerima notifikasi setelah deposit berhasil

### Judul
Nasabah menerima notifikasi (push/SMS) setelah transaksi deposit berhasil.

### Deskripsi
Sebagai Nasabah, saya ingin menerima notifikasi (push notification atau SMS) setiap kali transaksi deposit saya berhasil, agar saya yakin transaksi sudah tercatat dan dapat memantau saldo secara langsung.

### Acceptance Criteria
1. Setelah deposit berhasil, sistem mengirim notifikasi ke Nasabah (push/SMS).
2. Notifikasi berisi detail transaksi (jenis, berat, nilai Rupiah, waktu).
3. Untuk Mode Lansia, fallback ke SMS jika push gagal.
4. Notifikasi tidak terkirim lebih dari 1 kali untuk transaksi yang sama.

### Catatan Teknis
- Backend: Integrasi FCM untuk push, fallback SMS (Twilio).
- Notifikasi dikirim setelah transaksi sukses dan saldo terupdate.