import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvPW3LIHgFDVI2_5X1wiVxHCJw4YZY52c",
  authDomain: "linkedin-clone-9ed2f.firebaseapp.com",
  projectId: "linkedin-clone-9ed2f",
  storageBucket: "linkedin-clone-9ed2f.appspot.com",
  messagingSenderId: "575509012054",
  appId: "1:575509012054:web:f22fd47d1a82c14b1c25f7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
