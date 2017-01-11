import firebase from 'firebase';

export default class Firebase {
  constructor(config) {
    this.instance = firebase.initializeApp(config);
    this.facebookProvider = new firebase.auth.FacebookAuthProvider();
    this.facebookProvider.setCustomParameters({
      display: 'popup',
    });
  }

  get db() {
    return this.instance.database();
  }
}
