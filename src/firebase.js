import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAFaENzrTSiG_W3VjgpB4AhqQsGh3Lt26s",
    authDomain: "ggcattering.firebaseapp.com",
    databaseURL: "https://ggcattering.firebaseio.com",
    storageBucket: "ggcattering.appspot.com",
    messagingSenderId: "278981962617"
};

const app = firebase.initializeApp(config);

export default app;