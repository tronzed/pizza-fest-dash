// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRlHffWOnboV9dQft_pW2qF3iAiKdzotY",
  authDomain: "pizza-fest-61924.firebaseapp.com",
  databaseURL: "https://pizza-fest-61924-default-rtdb.firebaseio.com",
  projectId: "pizza-fest-61924",
  storageBucket: "pizza-fest-61924.firebasestorage.app",
  messagingSenderId: "442397432510",
  appId: "1:442397432510:web:ffdde8d47023d05d4b1cef",
  measurementId: "G-3T3ED7FXL4",
  databaseURL: "https://pizza-fest-61924-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);