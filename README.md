# Portofolio Pribadi - Eka Saputra

Ini adalah kode sumber untuk situs web portofolio pribadi saya, yang dibuat dengan teknologi web modern. Situs web ini menampilkan proyek-proyek saya, keahlian, dan menyediakan cara bagi pengunjung untuk menghubungi saya.

## ✨ Fitur

- **Desain Responsif:** Tampilan yang optimal di semua perangkat, dari desktop hingga mobile.
- **Animasi Modern:** Efek animasi yang halus untuk meningkatkan pengalaman pengguna.
- **Navigasi Intuitif:** Termasuk navigasi bawah untuk kemudahan penggunaan di perangkat mobile.
- **Halaman Dinamis:** Halaman portofolio dengan filter kategori dan halaman layanan.
- **Formulir Kontak Fungsional:** Formulir kontak yang terintegrasi dengan Genkit untuk memproses pengiriman.
- **SEO-Friendly:** Dibuat dengan `sitemap.xml` dan `robots.txt` untuk visibilitas yang lebih baik di mesin pencari.
- **Kustomisasi Tema:** Skema warna terang dan gelap yang konsisten menggunakan variabel CSS.

## 🚀 Teknologi yang Digunakan

- **Framework:** [Next.js](https://nextjs.org/) (dengan App Router)
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Komponen UI:** [ShadCN UI](https://ui.shadcn.com/)
- **Fungsionalitas AI:** [Firebase Genkit](https://firebase.google.com/docs/genkit)
- **Ikon:** [Lucide React](https://lucide.dev/)

## 🏁 Memulai

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

### Prasyarat

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 18 atau lebih baru) dan npm.

### Instalasi

1.  Clone repositori ini:
    ```bash
    git clone https://github.com/IshikawaUta/my-portfolio.git
    ```
2.  Masuk ke direktori proyek:
    ```bash
    cd my-portfolio
    ```
3.  Instal semua dependensi:
    ```bash
    npm install
    ```

### Menjalankan Server Pengembangan

Untuk memulai server pengembangan Next.js, jalankan perintah berikut:

```bash
npm run dev
```

Buka [http://localhost:9002](http://localhost:9002) di browser Anda untuk melihat hasilnya.

## 📜 Skrip yang Tersedia

- `npm run dev`: Memulai server pengembangan Next.js dengan Turbopack.
- `npm run build`: Mem-build aplikasi untuk production.
- `npm run start`: Menjalankan aplikasi yang sudah di-build.
- `npm run lint`: Menjalankan ESLint untuk memeriksa masalah pada kode.

## 🚀 Deploy ke Vercel

Cara termudah untuk men-deploy aplikasi Next.js Anda adalah dengan menggunakan [Platform Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dari para pembuat Next.js.

Ikuti langkah-langkah berikut untuk melakukan deployment:

1.  **Push Kode ke Repositori Git:**
    Pastikan kode proyek Anda sudah di-push ke repositori Git (misalnya, GitHub, GitLab, atau Bitbucket).

2.  **Impor Proyek di Vercel:**
    - Buka [Vercel](https://vercel.com) dan daftar atau masuk dengan akun Git Anda.
    - Klik tombol "**Add New...**" -> "**Project**".
    - Pilih repositori Git proyek Anda dan klik "**Import**".

3.  **Konfigurasi Proyek:**
    - Vercel akan secara otomatis mendeteksi bahwa ini adalah proyek Next.js dan mengatur konfigurasi build secara default. Anda biasanya tidak perlu mengubah apa pun.
    - Jika Anda memiliki variabel lingkungan (environment variables) di file `.env.local`, pastikan untuk menambahkannya di bagian "**Environment Variables**" pada pengaturan proyek di Vercel.

4.  **Deploy:**
    - Klik tombol "**Deploy**".
    - Vercel akan memulai proses build dan deployment. Setelah selesai, Anda akan mendapatkan URL publik untuk situs Anda.

Setiap kali Anda melakukan `push` ke branch utama repositori Anda, Vercel akan secara otomatis men-deploy ulang perubahan tersebut.
