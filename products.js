// DATABASE PRODUK ADITYA COMPUTER
const PRODUCTS_DATA = [
  {
    id: "laptop-01",
    name: "HP-14s-cr0xxx",
    brand: "HP",
    category: "Laptop",
    price: 3500000,
    stock: 1,
    description: "Laptop ringan dan ringkas untuk produktivitas harian, sekolah, dan kerja.",
    image: "https://k-galaxy.com/product/hp-14s-cr0xxx-with-intel-celeron-n5030-and-8gb-ram-and-windows-11%20A.jpg",
    specs: ["Pentium Silver N5030", "8GB DDR4 RAM", "256GB SSD", "Layar 14-inch HD"]
  },
  {
    id: "laptop-02",
    name: "HP-14s-cr0xxx",
    brand: "HP",
    category: "Laptop",
    price: 3500000,
    stock: 1,
    description: "Laptop ringan dan ringkas untuk produktivitas harian, sekolah, dan kerja.",
    image: "https://k-galaxy.com/product/hp-14s-cr0xxx-with-intel-celeron-n5030-and-8gb-ram-and-windows-11%20A.jpg",
    specs: ["Pentium Silver N5030", "8GB DDR4 RAM", "256GB SSD", "Layar 14-inch HD"]
  },
  {
    id: "monitor-01",
    name: "Monitor Xiaomi A24i 2026",
    brand: "Xiaomi",
    category: "PC dan Monitor",
    price: 1200000,
    stock: 1,
    description: "Monitor PC bezel-less dengan warna akurat dan kenyamanan mata.",
    image: "https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-monitor-a24i-2026/pc/5a67d1fbf6c4d379a20b5ef0864cef85.jpg?f=webp",
    specs: ["Full HD 1080p", "Refresh Rate 144Hz", "Panel IPS", "Bezel-less Design"]
  },
  {
    id: "net-01",
    name: "Router D-Link N300",
    brand: "D-Link",
    category: "Networking",
    price: 165000,
    stock: 1, 
    description: "Router Wi-Fi D-Link N300 dengan jangkauan sinyal luas.",
    image: "https://dlink.co.id/wp-content/uploads/2024/06/DIR-612_X1_Image-LSide_Left-600x600.png",
    specs: ["Kecepatan dan Jangkauan yang tinggi", "Memiliki Fitur Keamanan", "Mudah melakukan Set Up"]
  }
];

// DATABASE ARTIKEL EDUKASI
const ARTICLES_DATA = [
  {
    id: "art-01",
    title: "Mengapa Harus Rutin Service Berkala Laptop?",
    date: "15 Juni 2026",
    readTime: "3 menit baca",
    excerpt: "Banyak pengguna mengabaikan perawatan fisik laptop hingga terjadi overheat. Temukan pentingnya membersihkan kipas dan ganti thermal paste.",
    content: "Laptop yang sering digunakan akan menumpuk debu pada sistem pendinginnya. Debu ini menghalangi sirkulasi udara, menyebabkan processor bekerja lebih panas (overheat), dan menurunkan performa laptop Anda secara drastis. Melakukan service berkala minimal 6 bulan sekali untuk membersihkan debu dan mengganti thermal paste akan memperpanjang umur laptop Anda hingga bertahun-tahun.",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500"
  },
  {
    id: "art-02",
    title: "Tips Memilih RAM yang Tepat untuk PC Gaming",
    date: "10 Juni 2026",
    readTime: "4 menit baca",
    excerpt: "Jangan hanya melihat kapasitasnya saja. Kecepatan (Speed) dan fitur Dual-Channel sangat berpengaruh pada kestabilan FPS game Anda.",
    content: "Saat merakit PC gaming, kapasitas 16GB saat ini telah menjadi standar minimum yang disarankan. Namun, pastikan Anda menggunakan konfigurasi Dual-Channel (2x8GB) alih-of Single-Channel (1x16GB) karena Dual-Channel membuka lebar jalur komunikasi data sehingga processor dapat bekerja maksimal tanpa hambatan bottleneck.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500"
  }
];
