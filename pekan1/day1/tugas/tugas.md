1. perbedaan JSX dan HTML
- JSX bisa menyisipkan ekspresi JavaScript maksdunya
        - JSX = [<h1>{nama}</h1>]
        -HTML = [<h1>{nama}</h1>❌(tidak berfungsi)]
- JSX adalah JavaScript, HTML adalah markup biasa
        - JSX berjalan di dalam JavaScript dan akan dikompilasi menjadi kode JS.
        - HTML hanya markup statis untuk struktur halaman.
- Atributnya berbeda JSX memakai camelCase, HTML tidak.
        - JSX: className, onClick
        - HTML: class, onclick
- Harus punya 1 root element 
        - JSX: [<>
                         <h1>A</h1>
                         <p>B</p>
                    </>]
- JSX butuh penutup tag 
        - JSX : <img src="" />
        - HTML : <img src="" >
- JSX tidak bisa jalan sendiri
            -JSX → perlu compiler seperti Babel/Vite untuk diubah ke JavaScript.
            - HTML → langsung dipahami browser tanpa proses tambahan.
singkatnya: 
HTML = struktur halaman statis
JSX = HTML versi super yang bisa menjalankan JavaScript dan hanya hidup di dalam React.

2. -  Virtual DOM adalah salinan ringan dari DOM asli yang disimpan di memori.
React menggunakan Virtual DOM untuk memperbarui tampilan dengan lebih cepat dan efisien.

- Cara Kerja Virtual DOM di React

# Render pertama:
React membuat Virtual DOM berdasarkan komponen UI.

# Ketika state/props berubah:
React membuat Virtual DOM baru.

# Diffing:
React membandingkan Virtual DOM lama dan yang baru
→ mencari perbedaan kecil (node berubah, ditambah, dihapus).

# Update minimal:
React hanya memperbarui bagian DOM asli yang berubah
→ bukan seluruh halaman.

3. - Ciri-ciri SPA:
# Hanya satu halaman utama (index.html)
# Navigasi tanpa reload
# Menggunakan JavaScript/React/Vue untuk mengubah UI
# Lebih cepat & terasa seperti aplikasi mobile
- Kelebihannya :
# UX mulus, tidak pindah halaman
# Lebih cepat setelah load awal
- Kekurangannya :
# SEO lebih sulit
# Initial load bisa lebih lama
- Ciri-ciri MPA:
# Banyak file HTML (home.html, about.html, dll.)
# Tiap klik pindah halaman = reload penuh
# Umum di website tradisional (blog, e-commerce lama, portal berita)
- Kelebihannya :
# SEO sangat bagus (tiap halaman bisa diindeks)
# Lebih sederhana di backend
- kekurangannya :
# Reload halaman membuat UX terasa lambat
# Lebih berat untuk server (karena tiap navigasi minta halaman baru)