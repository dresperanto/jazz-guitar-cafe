import firebase from 'firebase'
// change lines below with your own Firebase snippets!
var config = {
  apiKey: "AIzaSyD-XCn45EccUDhkMKkEF29w-ULZ5XTzFyA",
  authDomain: "muzemaster-lessons.firebaseapp.com",
  databaseURL: "https://muzemaster-lessons.firebaseio.com",
  projectId: "muzemaster-lessons",
  storageBucket: "",
  messagingSenderId: "1010208036989"
};
const fire = firebase.initializeApp(config);
export default fire;
