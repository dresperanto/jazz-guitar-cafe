import firebase from 'firebase'
require('firebase/firestore')

var config = {
  apiKey: "AIzaSyD-XCn45EccUDhkMKkEF29w-ULZ5XTzFyA",
  authDomain: "muzemaster-lessons.firebaseapp.com",
  databaseURL: "https://muzemaster-lessons.firebaseio.com",
  projectId: "muzemaster-lessons",
  storageBucket: "",
  messagingSenderId: "1010208036989"
};
firebase.initializeApp(config);

export const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true });
