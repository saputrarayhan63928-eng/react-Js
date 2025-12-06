# Aplikasi Todo - React

Aplikasi Todo sederhana yang dibuat untuk mendemonstrasikan dasar-dasar React: komponen fungsional, hook (useState), props, rendering kondisional, rendering daftar, dan gaya responsif.

## Cara menjalankan

1. Buat folder proyek dan tempel berkas sumber.
2. Pastikan Node.js telah terinstal.
3. Instal dependensi: `npm install` (untuk package.json yang ditampilkan, Vite + React).
4. Jalankan server pengembangan: `npm start` (atau `npm run dev` tergantung pada pengaturan Vite Anda).

## Fitur yang Diimplementasikan
- Tambahkan todo (input + kirim melalui tombol/Enter)
- Tampilkan daftar dengan tombol unik
- Aktifkan/Nonaktifkan penyelesaian (kotak centang atau teks klik)
- Hapus todo
- Filter (Semua / Aktif / Selesai)
- Hapus yang telah selesai
- UI responsif dengan CSS + gaya sebaris dalam komponen

## Catatan
- Menggunakan `Date.now()` untuk ID cepat. Ganti dengan UUID jika Anda menduga adanya tabrakan.
- Tidak ada persistensi (localStorage atau backend) yang disertakan untuk menjaga kode tetap fokus pada React.