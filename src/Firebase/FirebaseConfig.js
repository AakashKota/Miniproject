import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyB-WUDlZGjVlUe4wqwVYTQ2ZooirvGDndg",
  authDomain: "miniproject12-76aca.firebaseapp.com",
  projectId: "miniproject12-76aca",
  storageBucket: "miniproject12-76aca.appspot.com",
  messagingSenderId: "231409128817",
  appId: "1:231409128817:web:02bcf2b665758bd6d352d0",
  measurementId: "G-2R3QZPSKLX"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
