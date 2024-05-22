// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Thêm dòng này

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ4nC12lFu8ASZUup7il1wCr-XSh7_qhA",
  authDomain: "login-satweb.firebaseapp.com",
  projectId: "login-satweb",
  storageBucket: "login-satweb.appspot.com",
  messagingSenderId: "694307193524",
  appId: "1:694307193524:web:662e95723f51f7b6cc0de1",
  measurementId: "G-BH50VJN30Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();

export default app;
