## Story 11: Semua proses mengikuti RLS policy untuk isolasi data antar unit bank sampah

### Judul
Isolasi data antar unit bank sampah dengan Row-Level Security (RLS) policy.

### Deskripsi
Sebagai sistem, saya ingin semua proses transaksi dan akses data mengikuti Row-Level Security (RLS) policy, agar data setiap unit bank sampah benar-benar terisolasi dan tidak bisa diakses oleh unit lain.

### Acceptance Criteria
1. Semua tabel utama (transaksi, saldo, user, foto) memiliki RLS policy aktif.
2. Operator hanya bisa mengakses data unitnya sendiri.
3. Admin dapat mengakses seluruh data dengan audit trail.
4. Setiap akses data diverifikasi oleh RLS policy di database.

### Catatan Teknis
- Database: Implementasi RLS di Supabase/PostgreSQL.
- Audit trail untuk akses admin.