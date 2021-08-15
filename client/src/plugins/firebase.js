import firebase from "firebase/app";
import "firebase/database";

firebase.initializeApp({
  apiKey: "AIzaSyDDt_-ase-Ul4xczIcrnOXWyLE28vRMGI8",
  authDomain: "tcc-unip-4d803.firebaseapp.com",
  databaseURL: "https://tcc-unip-4d803-default-rtdb.firebaseio.com",
  projectId: "tcc-unip-4d803",
  storageBucket: "tcc-unip-4d803.appspot.com",
  messagingSenderId: "87844165261",
  appId: "1:87844165261:web:9821f36a2f73e64bde34c4",
  measurementId: "G-76RP938LKB",
});

export default firebase.database();
