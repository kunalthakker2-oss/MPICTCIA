import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBXDHTCqM3DWHe0P-D1JJxcTLwW9y1vbqM",
  authDomain: "mpictcia.firebaseapp.com",
  projectId: "mpictcia",
  storageBucket: "mpictcia.firebasestorage.app",
  messagingSenderId: "222042559667",
  appId: "1:222042559667:web:43d036827e77e88633ccc6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };