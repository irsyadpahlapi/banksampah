## Story 07: Deposit tercatat di audit log immutable, dengan validasi atomicity

### Judul
Setiap transaksi deposit tercatat di audit log immutable dan validasi atomicity.

### Deskripsi
Sebagai sistem, saya ingin setiap transaksi deposit tercatat di audit log yang tidak bisa diubah (immutable) dan proses update saldo dilakukan secara atomic, agar tidak ada transaksi yang hilang dan data selalu konsisten.

### Acceptance Criteria
1. Setiap transaksi deposit dicatat di audit log (append-only).
2. Audit log tidak bisa diubah atau dihapus.
3. Update saldo dual ledger dilakukan secara atomic (all-or-nothing).
4. Sistem melakukan pengecekan harian untuk memastikan tidak ada transaksi hilang.

### Catatan Teknis
- Database: Tabel audit log append-only, trigger pada transaksi.
- Atomicity: Gunakan database transaction/multi-statement.