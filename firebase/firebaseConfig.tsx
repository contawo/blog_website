import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjbjxKVuEByFkdtky3-4-LdSwHNFxhaSg",
    authDomain: "contawo-10ed2.firebaseapp.com",
    projectId: "contawo-10ed2",
    storageBucket: "contawo-10ed2.appspot.com",
    messagingSenderId: "387975074631",
    appId: "1:387975074631:web:627cdd97908267e21ff262",
    measurementId: "G-Q2Z2CFHHD4"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);