import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmwtxbSHrNJUXGQ7LVkW_1Qhujm3wJrT4",
  authDomain: "gardening-community-4f424.firebaseapp.com",
  projectId: "gardening-community-4f424",
  storageBucket: "gardening-community-4f424.firebasestorage.app",
  messagingSenderId: "150245594480",
  appId: "1:150245594480:web:1528dabbf9d3d5e32cebb5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
