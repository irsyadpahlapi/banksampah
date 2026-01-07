## Story 09: UX menyesuaikan level Nasabah (Simple/Detailed/Power/Lansia)

### Judul
Tampilan aplikasi menyesuaikan level Nasabah secara progresif.

### Deskripsi
Sebagai Nasabah, saya ingin tampilan aplikasi menyesuaikan level saya (Simple, Detailed, Power User, Mode Lansia) berdasarkan jumlah transaksi dan preferensi, agar pengalaman penggunaan sesuai kebutuhan dan kemampuan saya.

### Acceptance Criteria
1. Level Simple aktif untuk pengguna baru.
2. Level Detailed terbuka setelah 3 transaksi, Power User setelah 10 transaksi.
3. Mode Lansia dapat diaktifkan kapan saja oleh pengguna.
4. UI, notifikasi, dan error message menyesuaikan level aktif.

### Catatan Teknis
- Frontend: Feature flagging, state di uiStore.
- Backend: Simpan level di profil user, update otomatis.