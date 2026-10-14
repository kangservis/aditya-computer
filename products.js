// File: products.js
// KITA SEKARANG MENGGUNAKAN FIREBASE FIRESTORE UNTUK MENGAMBIL DATA

// 1. Import library Firebase langsung dari CDN Google (sangat ringan)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 2. PASTE-KAN FIREBASE CONFIG ANDA DI SINI (Gantikan isi di bawah ini dengan milik Anda dari Langkah 2)
const firebaseConfig = {
    apiKey: "AIzaSyAebVJbgflOX2uHY8epkSoi6eIVcFkpsq4",
    authDomain: "aditya-computer-db.firebaseapp.com",
    projectId: "aditya-computer-db",
    storageBucket: "aditya-computer-db.firebasestorage.app",
    messagingSenderId: "433328408123",
    appId: "1:433328408123:web:879956669ccdcc9592be1e",
    measurementId: "G-4PS0CSCMB8"
  };


// 3. Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 4. Kita buat variabel global kosong sementara
window.PRODUCTS_DATA = [];
window.ARTICLES_DATA = []; // Biarkan kosong dulu, nanti kita urus artikel

// 5. Fungsi untuk mengambil data dari Firestore
export async function fetchProductsFromFirebase() {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const tempProducts = [];
    
    querySnapshot.forEach((doc) => {
      // Kita gabungkan ID dari Firestore dengan data produknya
      tempProducts.push({ id: doc.id, ...doc.data() });
    });

    window.PRODUCTS_DATA = tempProducts;
    return tempProducts;
  } catch (error) {
    console.error("Gagal mengambil data dari Firebase:", error);
    return [];
  }
}

// Tambahkan fungsi ini di bawah fetchProductsFromFirebase()
export async function fetchArticlesFromFirebase() {
  try {
    const querySnapshot = await getDocs(collection(db, "articles"));
    const tempArticles = [];
    
    querySnapshot.forEach((doc) => {
      tempArticles.push({ id: doc.id, ...doc.data() });
    });

    window.ARTICLES_DATA = tempArticles;
    return tempArticles;
  } catch (error) {
    console.error("Gagal mengambil data artikel dari Firebase:", error);
    return [];
  }
}