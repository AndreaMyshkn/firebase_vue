import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCATKIICwkWuc7DYWXEwJ8yvRo_amcAqQ4",
    authDomain: "locutions-a33b2.firebaseapp.com",
    databaseURL: "https://locutions-a33b2.firebaseio.com",
    projectId: "locutions-a33b2",
    storageBucket: "locutions-a33b2.appspot.com",
    messagingSenderId: "768644548441",
    appId: "1:768644548441:web:8e9245fdd30c42591e2e48",
    measurementId: "G-6XYZ1T2PWM"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 firebaseApp.firestore().settings({timestampsInSnapshots: true})
 
 export default firebaseApp.firestore();