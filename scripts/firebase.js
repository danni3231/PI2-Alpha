  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCGlYkHLPYxZH5UnNK9GyceaYoLr2oPwmU",
    authDomain: "w-a-tu-lado.firebaseapp.com",
    projectId: "w-a-tu-lado",
    storageBucket: "w-a-tu-lado.appspot.com",
    messagingSenderId: "101114025242",
    appId: "1:101114025242:web:58067583feec177c1e08a3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
  const messageCollection = db.collection('messages');