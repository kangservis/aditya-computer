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
    name: "Asus X441M",
    brand: "Asus",
    category: "Laptop",
    price: 2200000,
    stock: 1,
    description: "Laptop ini ideal untuk komputasi harian ringan seperti mengetik, browsing, dan belajar online,",
    image: "https://www.jmtech.id/blog/wp-content/uploads/2021/10/asus_asus-x441ba-ga602t-amd-a6-9220-4gb-1tb-radeon-r4-w10-silver-14inch_full03.jpg",
    specs: ["Intel Celeron N4000", "4GB DDR4 RAM", "128GB SSD", "Layar 14-inch HD"]
  },
  {
    id: "pc-01",
    name: "AIO Intel Core i5 Office",
    brand: "Advan",
    category: "AIO dan PC", 
    price: 4500000,
    stock: 1, 
    description: "Excellence With Style.",
    image: "https://els.id/wp-content/uploads/2023/11/All-In-One-Advan.png",
    specs: ["Kecepatan dan Jangkauan yang tinggi", "Memiliki Fitur Keamanan", "Mudah melakukan Set Up"]
  },
  {
    id: "monitor-01",
    name: "Xiaomi A24i 2026",
    brand: "Xiaomi",
    category: "Monitor",
    price: 1200000,
    stock: 1,
    description: "Monitor PC bezel-less dengan warna akurat dan kenyamanan mata.",
    image: "https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-monitor-a24i-2026/pc/5a67d1fbf6c4d379a20b5ef0864cef85.jpg?f=webp",
    specs: ["Full HD 1080p", "Refresh Rate 144Hz", "Panel IPS", "Bezel-less Design"]
  },
    {
    id: "monitor-02",
    name: "Pixel P190VG4 19 Inch",
    brand: "Pixel",
    category: "Monitor",
    price: 650000,
    stock: 4,
    description: "Monitor PC Compact dan Modern",
    image: "https://down-id.img.susercontent.com/file/sg-11134201-7rd46-m6pdlywnoumkf0@resize_w450_nl.webp",
    specs: ["HD 768p", "Sleek Design", "HDMI + VGA Port", "16:9 Aspect Ratio"]
  },
    {
    id: "monitor-03",
    name: "Pixel P240VG4 24 Inch",
    brand: "Pixel",
    category: "Monitor",
    price: 975000,
    stock: 1,
    description: "Monitor PC bezel-less dengan warna akurat dan kenyamanan mata.",
    image: "https://down-id.img.susercontent.com/file/id-11134207-7qukx-lk0wlqe30e4fd7.webp",
    specs: ["Full HD 1080p", "Refresh Rate 75Hz", "Sleek Design", "HDMI + VGA Port", "16:9 Aspect Ratio"]
  },
  {
    id: "printer-01",
    name: "Printer Epson L120",
    brand: "Epson",
    category: "Printer & Scanner",
    price: 850000,
    stock: 1, 
    description: "Printer dengan kinerja handal!.",
    image: "https://mediaserver.goepson.com/adaptivemedia/rendition?id=8fc5407ebe00c586c3c05da69aae7072b0a753c4&vid=8fc5407ebe00c586c3c05da69aae7072b0a753c4&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L120_550x310-min",
    specs: ["Warna Akurat", "Compact", "Mudah melakukan Set Up"]
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
  },
  {
    id: "aksesoris-01",
    name: "Fantech REVOLVER GP12",
    brand: "Fantech",
    category: "Aksesoris Lainnya", 
    price: 195000,
    stock: 1, 
    description: "Dapatkan presisi dan kontrol superior dalam setiap game dengan Fantech Revolver GP12",
    image: "https://fantech.id/cdn/shop/files/GamingPadGP12.png?v=1748585565&width=713",
    specs: ["Kontrol Akurat", "Sleek Design", "Play In Comfort"]
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
