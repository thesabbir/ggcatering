import Auth from './Auth';
import Firebase from './Firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAFaENzrTSiG_W3VjgpB4AhqQsGh3Lt26s',
  authDomain: 'ggcattering.firebaseapp.com',
  databaseURL: 'https://ggcattering.firebaseio.com',
  storageBucket: 'ggcattering.appspot.com',
  messagingSenderId: '278981962617',
};

const firebase = new Firebase(config);
const auth = new Auth(firebase.instance, firebase.facebookProvider);

export { auth, firebase };
