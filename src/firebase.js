import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAFaENzrTSiG_W3VjgpB4AhqQsGh3Lt26s',
  authDomain: 'ggcattering.firebaseapp.com',
  databaseURL: 'https://ggcattering.firebaseio.com',
  storageBucket: 'ggcattering.appspot.com',
  messagingSenderId: '278981962617',
};

const app = firebase.initializeApp(config);
const provider = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({
  display: 'popup',
});

// app.auth().signInWithPopup(provider).then((result) => {
//   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//   const token = result.credential.accessToken;
//   // The signed-in user info.
//   const user = result.user;
//   // ...
//   console.log(token);
//   console.log(user);
// }).catch((error) => {
//   // Handle Errors here.
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   // The email of the user's account used.
//   const email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   const credential = error.credential;
//   // ...
//   console.log(credential);
//   console.log(email);
//   console.log(errorCode);
//   console.log(error);
// });

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user);
    // User is signed in.
  } else {
    console.log('off');
    // No user is signed in.
  }
});


export default app;
