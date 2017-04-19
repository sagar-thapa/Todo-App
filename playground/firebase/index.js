import firebase from 'firebase';

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
  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app: {
      name:'Todo App',
      version: '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Sagar Thapa'
    }
  });

  // firebaseRef.update({
  //   'app/name': 'Todo App',
  //   'user/name': 'Sagar'
  // });

  // firebaseRef.child('app').update({
  //   name: 'Todo Application'
  // });
  //
  // firebaseRef.child('user').update({
  //   name: 'Sagar Thapa'
  // });

  // firebaseRef.child('app').once('value').then((snapshot)=>{
  //   console.log('Got entire database', snapshot.key, snapshot.val());
  // }, (e)=>{
  //   console.log('Unable to fetch value', e);
  // });

// var logData = (snapshot)=>{
//   console.log('Got value', snapshot.val());
// };
//   firebaseRef.on('value', logData);
//   firebaseRef.off();
//   firebaseRef.update({isRunning: false});

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.child('user').on('value', logData);
// firebaseRef.update({'user/name': 'Sagar Thapa'});
// firebaseRef.update({'app/name': 'Todo App'});
firebaseRef.child('todo').remove();
var todoRef = firebaseRef.child('todos');

todoRef.on('child_added', (snapshot)=>{
  console.log('child_added', snapshot.key, snapshot.val());
});



todoRef.push({
  text: 'To do 1'
});

todoRef.push({
  text: 'To do 2'
});
