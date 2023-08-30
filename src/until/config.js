// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFE8aca-bqF1OfzLwIjKSXos1qbn5N1WM",
  authDomain: "bookingdream-fc68e.firebaseapp.com",
  projectId: "bookingdream-fc68e",
  storageBucket: "bookingdream-fc68e.appspot.com",
  messagingSenderId: "170683483149",
  appId: "1:170683483149:web:7dd1c1ad39c91abc780144"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imgDB = getStorage(app)
