# 🎓 Repositori Tugas Kuliah - Aditya Satria Nugraha

Selamat datang di repositori pribadi tugas kuliah **Aditya Satria Nugraha** (NIM: **19220055**).
Website ini dirancang secara modern, responsif, dan fleksibel untuk menyimpan, mengelompokkan (Individu / Kelompok), dan menampilkan seluruh tugas kuliah secara terorganisir.

---

## 🚀 Fitur Utama Website

1. **Dashboard Repositori Interaktif**:
   - Filter tugas berdasarkan kategori (**Semua**, **Tugas Individu**, **Tugas Kelompok**).
   - Pencarian instan (*Live Search*) berdasarkan Judul, Mata Kuliah, Topik, atau Nama Anggota.
   - Statistik otomatis (Total Tugas, Jumlah Tugas Individu, Jumlah Tugas Kelompok).
2. **Metadata & Tanggal Pembuatan**:
   - Setiap tugas dilengkapi **Tanggal Dibuat** (misalnya *6 Oktober 2026*).
   - Menampilkan detail NIM & Nama Lengkap penyusun (Individu & Kelompok).
3. **Prakatin / Quick Preview**:
   - Tombol **Buka Tugas** untuk membuka halaman tugas penuh di tab baru.
   - Tombol **Preview Cepat** (ikon mata) untuk melihat isi tugas langsung di dalam modal tanpa meninggalkan repositori.
4. **Navigasi Kembali Instan**:
   - Halaman `tugas1-digital-kreatif.html` & `tugas2-digital-kreatif.html` dilengkapi dengan *sticky navigation bar* di bagian atas untuk kembali ke Repositori Utama dengan 1 kali klik.
5. **Generator Tugas Baru**:
   - Dilengkapi form pembantu otomatis untuk membuat struktur data JSON ketika Anda ingin menambah tugas baru di masa depan.

---

## 🌐 Cara Hosting di GitHub Pages (Gratis & Mudah)

Anda bisa meng-online-kan website ini secara gratis di GitHub Pages hanya dalam 3 langkah mudah:

### Langkah 1: Buat Repositori Baru di GitHub
1. Buka [GitHub](https://github.com) dan buat repositori baru (misalnya dengan nama `tugas-kuliah` atau `tugas`).
2. Atur repositori menjadi **Public**.

### Langkah 2: Upload / Push File ke GitHub
Buka terminal (Git Bash / PowerShell) di folder project ini (`c:\Users\adity\Downloads\tugas`), lalu jalankan:

```bash
git init
git add .
git commit -m "Initial commit: Website Repositori Tugas Kuliah"
git branch -M main
git remote add origin https://github.com/USERNAME-ANDA/NAMA-REPO-ANDA.git
git push -u origin main
```
*(Ganti `USERNAME-ANDA` dan `NAMA-REPO-ANDA` sesuai akun GitHub Anda).*

### Langkah 3: Aktifkan GitHub Pages
1. Di halaman repositori GitHub Anda, klik menu **Settings** > **Pages**.
2. Pada bagian **Build and deployment** > **Branch**:
   - Pilih Branch: **`main`**
   - Pilih Folder: **`/ (root)`**
3. Klik **Save**.
4. Tunggu 1–2 menit, website repositori Anda akan aktif secara publik di alamat:
   `https://USERNAME-ANDA.github.io/NAMA-REPO-ANDA/`

---

## ➕ Cara Menambah Tugas Baru di Masa Depan

Kedepannya, jika Anda mendapatkan tugas kuliah baru, cukup lakukan 2 langkah sederhana ini:

### Cara 1: Menggunakan Generator di Website (Paling Gampang)
1. Buka `index.html` di browser.
2. Scroll ke bagian **"Panduan & Generator Tambah Tugas Baru"**.
3. Isi Judul, Mata Kuliah, Kategori, Nama File HTML, Tanggal, dan Ringkasan.
4. Klik **Hasilkan Kode Data Tugas**.
5. Salin kode yang dihasilkan, lalu tempelkan (*paste*) ke dalam file `js/tasks-data.js`.
6. Simpan file HTML tugas baru Anda di folder repositori ini.

### Cara 2: Menambah Manual ke `js/tasks-data.js`
Cukup tambahkan objek baru ke dalam array `tasksData` pada file `js/tasks-data.js`:

```javascript
{
  id: "tugas-3",
  title: "Tugas 3: Judul Tugas Anda",
  type: "individu", // atau "kelompok"
  course: "Nama Mata Kuliah",
  date: "2026-10-15",
  formattedDate: "15 Oktober 2026",
  file: "nama-file-tugas-baru.html",
  author: {
    name: "Aditya Satria Nugraha",
    nim: "19220055"
  },
  members: [
    { name: "Aditya Satria Nugraha", nim: "19220055" }
  ],
  summary: "Ringkasan singkat mengenai tugas ini.",
  topics: ["Topik 1", "Topik 2"]
},
```

---

## 📂 Struktur File Workspace

```text
tugas/
├── index.html                  # Halaman Utamahub repositori pribadi
├── js/
│   └── tasks-data.js           # Database/Metadata tugas (mudah ditambah & diedit)
├── tugas1-digital-kreatif.html # Halaman Tugas 1 (Individu)
├── tugas2-digital-kreatif.html # Halaman Tugas 2 (Kelompok)
└── README.md                   # Dokumentasi & panduan hosting GitHub Pages
```

---
*Dibuat untuk Aditya Satria Nugraha &bull; Repositori Tugas Kuliah*
