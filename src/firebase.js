import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyC6jQfDe0IaMH1b4S09RL5CUpvfgNHUTBE",
    authDomain: "week9-eff5a.firebaseapp.com",
    databaseURL: "https://week9-eff5a.firebaseio.com",
    projectId: "week9-eff5a",
    storageBucket: "week9-eff5a.appspot.com",
    messagingSenderId: "109127557261",
    appId: "1:109127557261:web:1b80df6596a1f7168b82c4",
    measurementId: "G-92KG3T0GKY"

};
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;
