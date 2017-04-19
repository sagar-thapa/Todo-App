import firebase from 'firebase';
 try {
   // Initialize Firebase
   var config = {
     apiKey: "AIzaSyBAm2Y74c-GdXgdjk4_tvCD0yAHJ4ETO5Q",
     authDomain: "questionstore-2ff50.firebaseapp.com",
     databaseURL: "https://questionstore-2ff50.firebaseio.com",
     projectId: "questionstore-2ff50",
     storageBucket: "questionstore-2ff50.appspot.com",
     messagingSenderId: "1060675399508"
   };
   firebase.initializeApp(config);
 } catch (e) {

 }

export var firebaseRef = firebase.database().ref();
export default firebase;
