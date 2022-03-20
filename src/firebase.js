

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBWYqAR3P9Tt_yoNctyetFdNfKWIcJNdfE",
  authDomain: "linkedin-react-995c9.firebaseapp.com",
  projectId: "linkedin-react-995c9",
  storageBucket: "linkedin-react-995c9.appspot.com",
  messagingSenderId: "186916055763",
  appId: "1:186916055763:web:2584ea09f38377b4a90226"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
 firebase.firestore().settings({timestampsInSnapshots:true})


const db =  firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();
 const storage = firebase.storage();

 export {auth,provider,storage};

export default db;

