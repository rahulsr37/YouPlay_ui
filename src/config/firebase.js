
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBwjbFhHe7UWdXw5rVfz4TgMzWtHsy6mWw",
  authDomain: "youplay-d7104.firebaseapp.com",
  projectId: "youplay-d7104",
  storageBucket: "youplay-d7104.appspot.com",
  messagingSenderId: "829882103147",
  appId: "1:829882103147:web:8df25e684fb2fbd10b082e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);