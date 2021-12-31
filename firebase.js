import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAliA9YWeGMqJbyZ59Ys5UWe6OTzGFRYus",
  authDomain: "twitter-clone-7c65b.firebaseapp.com",
  projectId: "twitter-clone-7c65b",
  storageBucket: "twitter-clone-7c65b.appspot.com",
  messagingSenderId: "357872131881",
  appId: "1:357872131881:web:fd4c8101eb9c4d19aa2138",
  measurementId: "G-EJFN1ZBXLR"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };