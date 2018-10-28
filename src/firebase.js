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

export const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true });

const auth = firebase.auth();

export {
  auth,
};
