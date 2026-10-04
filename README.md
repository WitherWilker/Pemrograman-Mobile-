# Triply — Automatic Holiday Itinerary Planner

> **Plan Less. Travel More.**
> Aplikasi mobile yang membuat itinerary liburan secara otomatis berdasarkan preferensi pengguna.

Proyek kelompok mata kuliah **Pemrograman Mobile** (Expo + React Native + TypeScript).
Aplikasi dikembangkan bertahap dari **Modul 1 sampai Modul 6**.

- **Destinasi yang didukung:** Yogyakarta, Bali, Malang
- **Status saat ini:** Modul 1

## Tim

| Nama | Bagian |
|---|---|
| Adi | Data & logika (types, data, utils, algoritma itinerary) |
| Idris | Tampilan itinerary & fitur (ringkasan trip, kartu hari, kartu fitur) |
| Arif | Landing page & halaman utama (hero, kartu destinasi, tombol, layout) |

## Fitur Modul 1

- Landing page dengan hero, daftar kota (`FlatList`), dan tombol interaktif (`Alert`).
- Contoh itinerary otomatis yang dihitung dari satu objek preferensi tetap.
- Ringkasan trip: kota, jumlah hari, jumlah traveler, kategori, dan estimasi biaya tiket.
- Jadwal per hari: jam, nama tempat, rating, durasi, dan biaya.
- Bagian "Why plan with Triply?" dengan ikon.

> Form input (pilih kota, kategori, durasi, dsb.) dan navigasi antar halaman akan ditambahkan di modul berikutnya.

## Teknologi

- Expo SDK 57 · React Native · TypeScript
- expo-router
- @expo/vector-icons (Ionicons)

## Cara Menjalankan

```bash
git clone https://github.com/<username>/<nama-repo>.git
cd <nama-repo>
npm install
npx expo start --go
```

Scan QR yang muncul dengan aplikasi **Expo Go** di HP (HP dan laptop harus satu jaringan Wi-Fi).
Jika tampilan aneh atau error cache, jalankan `npx expo start -c`.

## Struktur Folder

```
src/
├── app/
│   ├── _layout.tsx            # layout root expo-router
│   └── index.tsx              # halaman utama (menyusun semua komponen)
├── components/
│   ├── PrimaryButton.tsx      # tombol reusable (+ ikon)
│   ├── HeroSection.tsx        # bagian atas halaman
│   ├── DestinationCard.tsx    # kartu kota
│   ├── TripSummary.tsx        # ringkasan trip & biaya
│   ├── DayCard.tsx            # jadwal satu hari
│   └── FeatureCard.tsx        # kartu "Why Triply"
├── data/
│   ├── destinations.ts        # array kota
│   ├── places.ts              # array tempat wisata
│   ├── features.ts            # array kartu fitur
│   └── samplePreferences.ts   # preferensi contoh (bisa diubah)
├── algorithms/
│   └── generateItinerary.ts   # inti aplikasi: preferensi -> itinerary
├── utils/
│   └── format.ts              # fungsi bantu (formatRupiah, formatTime, dst.)
├── styles/
│   ├── theme.ts               # warna bersama
│   ├── landing.styles.ts      # style hero, kartu kota, tombol, footer
│   └── trip.styles.ts         # style ringkasan, kartu hari, kartu fitur
└── types/
    └── index.ts               # semua interface & type
```

## Cara Kerja Itinerary (Modul 1)

`generateItinerary(preferences, places)` bekerja dalam 3 langkah:

1. **Filter** — ambil tempat yang kotanya sama dan punya minimal satu kategori yang dipilih.
2. **Urutkan** — rating tertinggi lebih dulu.
3. **Bagi ke hari** — setiap hari dimulai pukul 09:00; tiap tempat diberi jam berdasarkan durasi kunjungan ditambah jeda perjalanan 30 menit.

Untuk mencoba hasil yang berbeda, ubah nilai di `src/data/samplePreferences.ts` (kota, jumlah hari, kategori, jumlah tempat per hari).

## Pemetaan Materi Modul 1

| Materi | Contoh di kode |
|---|---|
| Struktur import & return komponen | semua file di `components/` dan `app/` |
| Komponen & props | `DestinationCard`, `DayCard`, `PrimaryButton` |
| Internal / External / Inline styling | external: `styles/`; inline: `style={{ ... }}` di `PrimaryButton`, `DayCard`, `TripSummary` |
| Package & library | `@expo/vector-icons` |
| Variable & conditions | `if / else if / else` di `utils/format.ts`; ternary di `DayCard` dan `TripSummary` |
| Function bawaan | `Alert.alert`, `Math.floor`, `padStart`, `push`, `sort` |
| Function custom | `formatRupiah`, `formatTime`, `getRatingLabel`, `generateItinerary`, `getTotalCost` |
| Callback function | `onPress`, `.some(...)`, `.sort(...)` |
| Loops | `.map()`, `FlatList`, `for` loop |
| Array of object, type & interface | `data/*.ts` dan `types/index.ts` |

## Alur Git

- Branch utama: `main`
- Branch kerja: `feat/adi`, `feat/idris`, `feat/arif`
- Perubahan masuk ke `main` lewat Pull Request, dengan urutan Adi → Idris → Arif.
- Setiap anggota hanya mengedit file bagiannya sendiri.

## Rencana Modul Berikutnya

| Modul | Rencana |
|---|---|
| 2 | `useState` & `useEffect`, navigasi `expo-router` (`push`, `back`), `_layout.tsx` dengan `<Stack.Screen>`; form input preferensi |
| 3 | Mengambil data dari API eksternal (mis. cuaca per kota), fungsi async, `.then()` / `.resolve()` / `.reject()` |
| 4–6 | Rekomendasi hotel, estimasi waktu tempuh, regenerate itinerary, simpan & bagikan trip (menyesuaikan kriteria tiap modul) |
