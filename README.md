<div align="center">

# ✨ Church Motion Studio

### Worship Lyrics • Motion Graphics • Windows Editor

**Buat scene lirik ibadah dengan lebih mudah — satu blok lirik, satu scene.**

![Status](https://img.shields.io/badge/status-early%20prototype-orange)
![Platform](https://img.shields.io/badge/platform-Windows%2010%20%2F%2011-blue)
![Version](https://img.shields.io/badge/version-0.1.0-purple)

</div>

> [!IMPORTANT]
> **Versi 0.1.0 masih prototipe awal.** Editor lirik dasar sudah tersedia dalam source code, tetapi **belum** ada render MP4, ekspor ZIP, keyframe timeline, atau plugin/preset komunitas. Tampilan konsep bukan bukti bahwa seluruh fitur sudah berfungsi. Belum ada jaminan bebas bug pada semua perangkat.

---

## 📖 Tentang aplikasi

**Church Motion Studio** adalah proyek aplikasi desktop Windows untuk membuat animasi teks lirik lagu gereja tanpa memerlukan audio. Rancangan akhirnya memungkinkan setiap scene diedit sendiri, memakai background warna, gambar, video, atau transparan, lalu diekspor sebagai video terpisah dalam satu ZIP.

- **Target platform:** Windows 10/11 64-bit
- **Teknologi prototipe:** Electron, HTML, CSS, JavaScript
- **Penggunaan:** aplikasi lokal/offline (setelah dependensi terpasang)
- **Tampilan:** Dark Mode dan Light Mode
- **Repository:** [scardbypass/church-motion-studio](https://github.com/scardbypass/church-motion-studio)

## 🖼️ Alur kerja yang dirancang

```text
Notepad (.txt)
     │
     ▼
Import Lyrics
     │
     ▼
Pisahkan berdasarkan baris kosong
     │
     ▼
Scene 01 | Scene 02 | Scene 03 | ...
     │
     ▼
Edit teks, warna, durasi, animasi
     │
     ▼
Simpan proyek (.cmsproj)
     │
     ▼
[Direncanakan] Render MP4 per scene → Gabungkan ke ZIP
```

### Contoh file lirik

Simpan sebagai `Kumenang.txt` (UTF-8):

```text
Ku menang ku menang
Bersama Yesus Tuhan

Ku menang ku menang
Di dalam peperangan

Haleluya haleluya
Aku menang
```

**Hasil impor:** 3 scene, karena satu **baris kosong** memisahkan blok. Dua baris teks yang berurutan tetap berada dalam satu scene. Durasi awal dapat dipilih sebelum impor, misalnya 8 detik per scene.

## ✅ Fitur versi 0.1.0

| Fitur | Status | Keterangan |
|:--|:--:|:--|
| Import TXT | ✅ Kode tersedia | Pilih file Notepad dari komputer |
| Pemisahan blok lirik | ✅ Kode tersedia | Baris kosong = scene baru |
| Edit teks per scene | ✅ Kode tersedia | Mengubah isi lirik |
| Durasi scene | ✅ Kode tersedia | Durasi disimpan di data proyek |
| Warna background & teks | ✅ Kode tersedia | Color picker |
| Preview animasi | ✅ Kode tersedia | None, Fade, Slide Up, Zoom In |
| Light / Dark Mode | ✅ Kode tersedia | Tema tersimpan secara lokal |
| Autosave | ✅ Kode tersedia | Menggunakan localStorage Electron |
| Save / Open project | ✅ Kode tersedia | File JSON dengan ekstensi `.cmsproj` |
| Timeline & keyframe | 🕒 Direncanakan | Belum tersedia |
| Background gambar/video/transparan | 🕒 Direncanakan | Belum tersedia |
| Preset & Community Library | 🕒 Direncanakan | Belum tersedia |
| Render MP4 | 🕒 Direncanakan | Belum tersedia |
| Export ZIP | 🕒 Direncanakan | Tombol masih nonaktif |
| Windows installer siap rilis | 🧪 Belum teruji | Konfigurasi build awal tersedia |

> [!NOTE]
> Durasi scene saat ini merupakan metadata proyek. Preview CSS belum otomatis berhenti berdasarkan durasi tersebut. Auto Save disimpan lokal pada data aplikasi Electron, **belum** sebagai file proyek di folder Documents.

## 💻 Persyaratan pengembangan

1. Windows 10 atau Windows 11 (64-bit).
2. [Git](https://git-scm.com/downloads).
3. [Node.js](https://nodejs.org/) versi 22 LTS beserta npm.
4. [Visual Studio Code](https://code.visualstudio.com/) (opsional, tetapi disarankan).
5. Internet untuk instalasi awal dependensi.

Cek instalasi melalui terminal PowerShell:

```powershell
node -v
npm -v
git --version
```

## 🚀 Instalasi pertama (cukup sekali)

Buka **VS Code → Terminal → New Terminal**, lalu jalankan:

```powershell
git clone https://github.com/scardbypass/church-motion-studio.git
cd church-motion-studio
npm install
npm start
```

Jendela Electron akan terbuka. Ini menjalankan **source code**, bukan installer final.

### 🔄 Menjalankan kembali besok

Buka folder `church-motion-studio` di VS Code, lalu:

```powershell
npm start
```

Tidak perlu clone atau install ulang setiap hari.

### 📥 Mengambil update terbaru

Di terminal folder proyek:

```powershell
git pull origin main
npm install
npm start
```

`npm install` diperlukan jika dependensi berubah; jika tidak berubah, biasanya cukup `git pull` dan `npm start`.

> [!CAUTION]
> Jangan menghapus folder proyek saat memperbarui. Jika ada perubahan kode lokal, commit atau simpan dahulu sebelum `git pull`. Hindari `git reset --hard` jika belum memahami konsekuensinya.

## 🎬 Cara menggunakan prototipe

1. Klik **Import TXT**, lalu pilih file lirik dari Notepad.
2. Atur **Durasi default** sebelum impor.
3. Pilih scene di panel kiri.
4. Ubah teks, durasi, warna, dan animasi melalui panel kanan.
5. Klik **Replay Animation** untuk mengulang preview.
6. Klik **Save Project** untuk menyimpan `.cmsproj`.
7. Gunakan **Open Project** untuk membuka proyek kembali.

**Shortcut dan timeline lanjutan belum tersedia.** Jangan mengandalkan tombol Export ZIP sebelum fitur render selesai.

## 🏗️ Struktur proyek saat ini

```text
church-motion-studio/
├── index.html       # UI editor, scene, preview, autosave
├── main.js          # Proses utama Electron & dialog file
├── preload.js       # API aman renderer ↔ Electron
├── package.json     # Script, dependency, konfigurasi build
└── README.md        # Dokumentasi ini
```

> Struktur modular dengan folder `src/`, `components/`, `renderer/`, `presets/`, dan `export/` masih menjadi **rencana refactor**.

## 📦 Build aplikasi Windows (eksperimental)

Jalankan di Windows:

```powershell
npm run dist
```

Script ini memanggil electron-builder. **Konfigurasi packaging saat ini belum divalidasi end-to-end**, sehingga hasil installer belum dijamin berfungsi. Pastikan file `preload.js` turut dimasukkan ke paket ketika konfigurasi build diperbaiki.

## 🗺️ Roadmap

### V1 — Editor lirik yang stabil
- [x] Import TXT per blok
- [x] Editor teks, warna, durasi
- [x] Preview animasi dasar
- [x] Dark/Light Mode
- [x] Save/Open proyek dasar
- [ ] Timeline dengan keyframe
- [ ] Background gambar/video/transparan
- [ ] Autosave file & recovery yang lebih aman
- [ ] Render MP4 per scene tanpa audio
- [ ] Batch export dan ZIP otomatis
- [ ] Pengujian installer Windows

### V2 — Motion graphics
- [ ] Kinetic typography per kata/huruf
- [ ] Brush stroke, glow, masking, motion blur
- [ ] Animasi 3D dan particle effects
- [ ] Simpan/terapkan preset ke banyak scene
- [ ] Paket preset `.cmspack`

### V3 — Ekosistem preset
- [ ] Community Preset Library
- [ ] Unduh & instal preset dari GitHub
- [ ] Preview preset sebelum instalasi
- [ ] Validasi keamanan paket preset
- [ ] Evaluasi kompatibilitas format preset eksternal

**Preset CapCut asli tidak dijamin kompatibel**; dukungan konversi memerlukan penelitian format dan lisensi.

## 🔐 Data & privasi

- Aplikasi prototipe berjalan lokal; tidak ada server akun.
- Autosave memakai `localStorage` pada profil Electron.
- File `.cmsproj` disimpan ke lokasi yang dipilih pengguna.
- Cadangkan proyek penting secara manual.
- Jangan menyimpan file proyek hanya di folder source code yang sering dihapus atau di-reset.

## ⚖️ Lisensi & fondasi open-source

Kode prototipe ini adalah **scaffolding original**, **belum** merupakan fork OpenChatCut. Sebelum mengintegrasikan kode proyek lain, lisensi, atribusi, dan kewajiban distribusinya harus diperiksa. OpenChatCut menggunakan AGPL-3.0; kewajiban lisensi tersebut perlu dipenuhi jika kodenya digunakan dan didistribusikan.

Belum ada file `LICENSE` khusus untuk kode prototipe ini. Jangan mengasumsikan izin penggunaan ulang di luar yang dinyatakan secara eksplisit.

---

<div align="center">

**Church Motion Studio** ✦ *Create Beautiful Lyrics Motion for Worship*

Made for creative church media workflows.

</div>
