// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBx23MfynMMeiUMCrwlb8CPtVQTvSq-vLc',
  authDomain: 'clone-e8afe.firebaseapp.com',
  projectId: 'clone-e8afe',
  storageBucket: 'clone-e8afe.appspot.com',
  messagingSenderId: '558753972236',
  appId: '1:558753972236:web:673e66b3489e49a1f22e29',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp(); // for different time zones

export { app, db, auth, provider, timestamp };
