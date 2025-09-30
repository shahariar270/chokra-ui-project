import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAksqfKRoE3sK66-1lUJeqSC1fGWPuq7f8",
  authDomain: "testing-9460c.firebaseapp.com",
  projectId: "testing-9460c",
  storageBucket: "testing-9460c.firebasestorage.app",
  messagingSenderId: "439220432155",
  appId: "1:439220432155:web:0db0252c4f6bed5b1df7be",
  measurementId: "G-T65T05G3EM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);