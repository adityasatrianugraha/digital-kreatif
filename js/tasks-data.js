/**
 * Repositori Data Tugas Kuliah
 * Owner: Aditya Satria Nugraha (NIM: 19220055)
 * 
 * CARA MENAMBAHKAN TUGAS BARU:
 * Cukup tambahkan objek baru ke dalam array `tasksData` di bawah ini.
 */

const tasksData = [
  {
    id: "tugas-1",
    title: "Tugas 1: Digital Kreatif",
    type: "individu",
    course: "Digital Kreatif",
    date: "2026-10-06",
    formattedDate: "6 Oktober 2026",
    file: "tugas1-digital-kreatif.html",
    author: {
      name: "Aditya Satria Nugraha",
      nim: "19220055"
    },
    members: [
      { name: "Aditya Satria Nugraha", nim: "19220055", role: "Individu" }
    ],
    summary: "Pembahasan mendalam tentang perbedaan digitalisasi vs digital kreatif, spektrum peran desainer grafis menghadapi otomasi AI, serta perkembangan audio-visual dan personalisasi konten.",
    topics: ["Digital Kreatif vs Digitalisasi", "Dampak AI pada Desainer", "Personalisasi Konten"]
  },
  {
    id: "tugas-2",
    title: "Tugas 2: Digital Kreatif",
    type: "kelompok",
    course: "Digital Kreatif",
    date: "2026-10-06",
    formattedDate: "6 Oktober 2026",
    file: "tugas2-digital-kreatif.html",
    author: {
      name: "Aditya Satria Nugraha",
      nim: "19220055"
    },
    members: [
      { name: "Aditya Satria Nugraha", nim: "19220055" },
      { name: "Sigit Andreansyah", nim: "19231087" },
      { name: "Sandra Kaylani", nim: "19231040" }
    ],
    summary: "Studi dan analisis kelompok mengenai percepatan efisiensi alur kerja kreatif berbasis AI (pra-produksi hingga pasca-produksi), diferensiasi nilai desainer manusia, dan siklus personalisasi audiens.",
    topics: ["Alur Kerja Industri Kreatif", "Kolaborasi AI & Manusia", "Personalized Engagement"]
  }
];
