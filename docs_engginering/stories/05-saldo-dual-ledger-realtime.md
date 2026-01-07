## Story 06: Saldo dual ledger terupdate secara real-time

### Judul
Saldo Rupiah dan kg nasabah serta operator terupdate secara real-time setelah deposit.

### Deskripsi
Sebagai Nasabah dan Operator, saya ingin saldo Rupiah dan kg saya terupdate secara real-time di aplikasi setelah transaksi deposit, agar saya selalu mengetahui saldo terbaru tanpa perlu refresh manual.

### Acceptance Criteria
1. Setelah transaksi berhasil, saldo Rupiah dan kg langsung terupdate di aplikasi Nasabah dan Operator.
2. Update saldo menggunakan Supabase Realtime subscription.
3. Tidak ada delay lebih dari 5 detik (NFR-P5).
4. Jika update gagal, sistem menampilkan indikator status sinkronisasi.

### Catatan Teknis
- Backend: Trigger update saldo pada transaksi baru.
- Frontend: Subscribe ke channel realtime, tampilkan status sync.