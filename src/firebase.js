// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa3EKga6B6sKH-faUMD3_0Wtxr03ackLY",
  authDomain: "my-blog-cf2ce.firebaseapp.com",
  projectId: "my-blog-cf2ce",
  storageBucket: "my-blog-cf2ce.appspot.com",
  messagingSenderId: "83443163822",
  appId: "1:83443163822:web:6145f59ca07123ddff033f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);