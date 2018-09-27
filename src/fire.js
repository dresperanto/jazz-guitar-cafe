import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyD-XCn45EccUDhkMKkEF29w-ULZ5XTzFyA",
  authDomain: "muzemaster-lessons.firebaseapp.com",
  databaseURL: "https://muzemaster-lessons.firebaseio.com",
  projectId: "muzemaster-lessons",
  storageBucket: "muzemaster-lessons.appspot.com",
  messagingSenderId: "1010208036989"
};

firebase.initializeApp(config);

export const db = firebase.firestore()
