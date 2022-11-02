// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz64XKrJDD_CcUvpd4Fwadm4iw5KysTmw",
  authDomain: "email-password-auth-eb5ce.firebaseapp.com",
  projectId: "email-password-auth-eb5ce",
  storageBucket: "email-password-auth-eb5ce.appspot.com",
  messagingSenderId: "43891047140",
  appId: "1:43891047140:web:7e29b5b6d8fab68ff84af1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;