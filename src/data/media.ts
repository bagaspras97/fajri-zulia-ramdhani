import desa1 from "../assets/desa1.webp";
import desa2 from "../assets/desa2.webp";
import bannerSantri from "../assets/banner-santri.jpeg";

export interface MediaItem {
    id: number;
    type: "image" | "video";
    src: string;
    thumbnail: string;
    title: string;
    description: string;
    category: string;
    youtubeId?: string; // Tambahkan properti youtubeId untuk video YouTube
  }

  export const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: "video",
      src: "", // Path ke file lokal
      youtubeId: "elP9MQ0Abdw",
      thumbnail:
        "https://i.ytimg.com/vi/elP9MQ0Abdw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAgCjpErTtJOB90oBQ62_RMvE6-dA",
      title:
        "PEMBACAAN KARYA FINALIS 10 BESAR LOMBA PUISI NASIONAL, TEMA : TANAM",
      description: "",
      category: "Karya",
    },
    {
      id: 2,
      type: "video",
      src: "", // Tidak perlu src untuk video YouTube
      youtubeId: "yxL8uvtV5hk", // ID video YouTube
      thumbnail:
        "https://i.ytimg.com/vi/yxL8uvtV5hk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAETZHvcuHTnhdjYdJdQ53lNdvOAg",
      title: "Bahas Buku ABCD Perempuan di Sufada Radio",
      description: `Kalian yang perempuan tentu sayang dong dengan diri kalian sendiri dan pastinya faham akan bagaimana diri kalian. Buat para lelaki tentunya punya dong perempuan yang kalian sayangi. Misalnya orang tua, saudara, gebetan, temen atau masih sayang sama mantan kamu? ahaha. 
Di episode kali ini Sufada Corner bakal ngebahas tentang Serba-serbi Perempuan. Hmm... ngeri-ngeri sedap yaa...`,
      category: "Seminar",
    },
    {
      id: 3,
      type: "video",
      src: "",
      youtubeId: "ZUEGjPCyb8o", // ID video YouTube
      thumbnail: desa1,
      title:
        "Posyandu Inklusif & Pelatihan Memasak PMT di Desa Suwat, Gianyar.",
      description: "",
      category: "Community Services",
    },
    {
      id: 4,
      type: "video",
      src: "",
      youtubeId: "tUeeT5mE1VY",
      thumbnail:
        "https://i.ytimg.com/vi/tUeeT5mE1VY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCEv8zWVcQfZ1WirVHaItK3ygcfWQ",
      title: "Multitask Di Usia Muda, Kenapa Enggak?? #LTNU Let's Talk NU",
      description: "",
      category: "Seminar",
    },
    {
      id: 5,
      type: "video",
      src: "",
      youtubeId: "O6RbHFopIVQ",
      thumbnail: bannerSantri,
      title: "Santri Punya Usaha - Perempuan Bercerita di Ramadan 2024",
      description: "",
      category: "Seminar",
    },
    {
      id: 6,
      type: "video",
      src: "",
      youtubeId: "dZepAVCtmVE",
      thumbnail: desa2,
      title: "Kegiatan Beauty Class di Desa Kedisan, Kab Gianyar",
      description: "",
      category: "Community Services",
    },
  ];
