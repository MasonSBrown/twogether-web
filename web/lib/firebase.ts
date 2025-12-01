import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace with your Firebase project configuration
// You can find this in Firebase Console -> Project Settings -> General -> Your Apps -> SDK Setup and Configuration -> Config
const firebaseConfig = {
  apiKey: "AIzaSyCAZQ4-tOWSc50OKde5yMPvpNOB4uno2dE",
  authDomain: "twogether-web.firebaseapp.com",
  projectId: "twogether-web",
  storageBucket: "twogether-web.firebasestorage.app",
  messagingSenderId: "44168866754",
  appId: "1:44168866754:web:7df5cdecb9b046ec3b445b",
  measurementId: "G-DMZB0GZBFZ"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };
