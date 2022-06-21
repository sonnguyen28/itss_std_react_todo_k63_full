import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAuc9AEC4GgevXR0yErMvh1tSLq8ETVGgQ",
  authDomain: "fir-sample-2107d.firebaseapp.com",
  projectId: "fir-sample-2107d",
  storageBucket: "fir-sample-2107d.appspot.com",
  messagingSenderId: "646805423693",
  appId: "1:646805423693:web:4a62a2ea7d1a2ac9d2be04"
};

firebase.initializeApp(firebaseConfig);