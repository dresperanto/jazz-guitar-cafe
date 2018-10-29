import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyCOdrfdKZQ6F_ULxdfxiiYRWkXc-ii0uUU",
  authDomain: "jazz-guitar-cafe.firebaseapp.com",
  databaseURL: "https://jazz-guitar-cafe.firebaseio.com",
  projectId: "jazz-guitar-cafe",
  storageBucket: "jazz-guitar-cafe.appspot.com",
  messagingSenderId: "808651069974"
};
firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();
db.settings({ timestampsInSnapshots: true });

export {
  auth,
  db,
};
