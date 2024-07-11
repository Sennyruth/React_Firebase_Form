// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi3oomL1xUS5AWZ1FLwGJeSEO2pmzHmAM",
  authDomain: "login-3f2dd.firebaseapp.com",
  projectId: "login-3f2dd",
  storageBucket: "login-3f2dd.appspot.com",
  messagingSenderId: "598814629277",
  appId: "1:598814629277:web:7d5a12005b3d4e51f9e374"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const auth = getAuth(app);
// export const db = getFirestore(app);
// export default app;
export {auth,googleProvider,facebookProvider}
