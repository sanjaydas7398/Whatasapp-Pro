
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBB-OlM2yt8fVwNfCqCClIg5acj24eyJv0",
  authDomain: "whatsapp-clone-d9906.firebaseapp.com",
  projectId: "whatsapp-clone-d9906",
  storageBucket: "whatsapp-clone-d9906.firebasestorage.app",
  messagingSenderId: "5512218204",
  appId: "1:5512218204:web:932db198d3df3fbd8d4899",
  measurementId: "G-2C2KW9MCNL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider}