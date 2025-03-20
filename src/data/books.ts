import book1 from "../assets/book1.webp";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import book4 from "../assets/book4.jpeg";
import book5 from "../assets/book5.jpeg";

export interface Book {
  title: string;
  image: string;
  description: string;
  year: string;
}

export const books: Book[] = [
  {
    title: "ABCD Perempuan",
    image: book1,
    description:
      "Buku yang menceritakan tentang perjalanan perempuan dalam mengatasi berbagai tantangan kehidupan.",
    year: "2020",
  },
  {
    title: "Resume Perasaan",
    image: book2,
    description:
      "Kumpulan esai reflektif yang mengeksplorasi kompleksitas emosi manusia dalam kehidupan modern.",
    year: "2023",
  },
  {
    title: "Kalender Pawukon Bali dalam Perspektif Astronomi",
    image: book3,
    description:
      "Analisis mendalam tentang transformasi pendidikan di era digital dan implikasinya bagi generasi masa depan.",
    year: "2023",
  },
  {
    title: "Ekspresi Keberagamaan Muslimah dalam Keberagaman Bali",
    image: book4,
    description:
      "Panduan praktis untuk manajemen proyek kreatif dengan pendekatan inovatif.",
    year: "2024",
  },
  {
    title: "Hingga Semua Terlihat Sama",
    image: book5,
    description:
      "Koleksi cerita inspiratif dari berbagai tokoh yang telah mengubah dunia melalui ide-ide sederhana.",
    year: "2025",
  },
];
