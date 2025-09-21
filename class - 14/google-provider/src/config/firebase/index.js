// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjPLjh1HoV-l-ii2hpU6tjDZQNIMXgVNo",
  authDomain: "login-app-e0a72.firebaseapp.com",
  projectId: "login-app-e0a72",
  storageBucket: "login-app-e0a72.firebasestorage.app",
  messagingSenderId: "321110782588",
  appId: "1:321110782588:web:21d030415fb8f250e00ff9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
