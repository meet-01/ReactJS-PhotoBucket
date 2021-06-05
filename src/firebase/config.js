import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC47z9L6ZPMeV7Op16amDryzpFgrg1Iyfk",
  authDomain: "photo-galleryapp.firebaseapp.com",
  projectId: "photo-galleryapp",
  storageBucket: "photo-galleryapp.appspot.com",
  messagingSenderId: "408333409150",
  appId: "1:408333409150:web:1bcc6e6ee184d6c36f312f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectFirestore, projectStorage, timestamp };
