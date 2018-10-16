import firebase from 'firebase'
require('firebase/firestore')

var config = {
  apiKey: "AIzaSyCOdrfdKZQ6F_ULxdfxiiYRWkXc-ii0uUU",
  authDomain: "jazz-guitar-cafe.firebaseapp.com",
  databaseURL: "https://jazz-guitar-cafe.firebaseio.com",
  projectId: "jazz-guitar-cafe",
  storageBucket: "jazz-guitar-cafe.appspot.com",
  messagingSenderId: "808651069974"
};
firebase.initializeApp(config);

export const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true });
