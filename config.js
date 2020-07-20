import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAfRnHk07rsXIxfYfuQ_mX1wh2RZakTeGg",
    authDomain: "project-97daa.firebaseapp.com",
    databaseURL: "https://project-97daa.firebaseio.com",
    projectId: "project-97daa",
    storageBucket: "project-97daa.appspot.com",
    messagingSenderId: "623669417937",
    appId: "1:623669417937:web:8452a5f578d5bb26d332f0",
    measurementId: "G-RX2HSQ4TXS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase.firestore();