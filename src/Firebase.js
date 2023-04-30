import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCC0H49d0K67yGYvprPf_5TSrzQG5-j3TE",
  authDomain: "test-16408.firebaseapp.com",
  databaseURL: "https://test-16408-default-rtdb.firebaseio.com",
  projectId: "test-16408",
  storageBucket: "test-16408.appspot.com",
  messagingSenderId: "279255768738",
  appId: "1:279255768738:web:e343ba6e6e7a55cbfe81fb",
  measurementId: "G-6ZJN063KWK"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const storage = getStorage(app);


export {analytics , database , storage}