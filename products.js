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


// 3. Inisialisasi Firebase (diexport agar bisa dipakai oleh admin.html)
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

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

// --- UTILITAS GLOBAL (Bisa dipakai oleh index.html & admin.html) ---

// 1. Fungsi Image Proxy (Anti blokir gambar)
window.getProxyUrl = (url) => {
  if (!url) return '';
  if (url.startsWith('img/') || !url.startsWith('http') || url.includes('wsrv.nl')) return url;
  return `https://wsrv.nl/?url=${encodeURIComponent(url)}`;
};

// 2. Fungsi Toast Notification (Notifikasi Pop-up)
window.showNotification = (message, type = "success") => {
  const container = document.getElementById("toast-container");
  if (!container) return;
  
  const toast = document.createElement("div");
  let iconClass = "ri-checkbox-circle-fill text-emerald-500";
  let borderClass = "border-slate-100";

  if (type === "warning" || type === "error") {
    iconClass = "ri-error-warning-fill text-red-500";
    borderClass = "border-red-150";
  }

  toast.className =
    "bento-card p-4 flex items-center gap-3 bg-white shadow-xl border pointer-events-auto w-full transition-all duration-300 translate-y-2 opacity-0 " +
    borderClass;
  toast.innerHTML =
    '<i class="' + iconClass + ' text-xl shrink-0"></i>' +
    '<p class="text-xs font-semibold text-slate-800 flex-grow leading-tight">' + message + "</p>" +
    '<button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-slate-900 text-lg cursor-pointer"><i class="ri-close-line"></i></button>';

  container.appendChild(toast);

  setTimeout(() => toast.classList.remove("translate-y-2", "opacity-0"), 10);
  setTimeout(() => {
    toast.classList.add("translate-y-2", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};