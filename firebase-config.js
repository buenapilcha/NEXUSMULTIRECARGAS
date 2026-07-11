// Importar funciones de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// TU CONFIGURACIÓN DE FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyAZvUWfPsciIUQzq807L4x2JpgRvEbw22E",
  authDomain: "nexus-multirecargas-ee3dc.firebaseapp.com",
  projectId: "nexus-multirecargas-ee3dc",
  storageBucket: "nexus-multirecargas-ee3dc.firebasestorage.app",
  messagingSenderId: "143885481117",
  appId: "1:143885481117:web:a0716e832c0c3584f15074"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Inicializamos Firestore

// Configurar el proveedor de Google
const provider = new GoogleAuthProvider();

// Exportar para usar en otros archivos
export { auth, db, provider };
