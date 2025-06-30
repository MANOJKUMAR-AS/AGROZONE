// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu_J87Fbt9Ps0R75xBe4IuDyKG4X_3RBM",
  authDomain: "agrobase-8c5f8.firebaseapp.com",
  projectId: "agrobase-8c5f8",
  storageBucket: "agrobase-8c5f8.firebasestorage.app",
  messagingSenderId: "287074726848",
  appId: "1:287074726848:web:81ce4a2a1ecfc0680c8e25",
  measurementId: "G-ETPN2MY13E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
let analytics = null;
if (typeof window!=="undefined"){
    analytics = getAnalytics(app);
}
export {analytics};