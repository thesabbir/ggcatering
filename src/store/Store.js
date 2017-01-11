import { observable, action } from 'mobx';

export default class Store {
  @observable user = null;
  @observable tokens = {};
  @observable loggedIn = false;

  constructor(firebase, fbProvider) {
    this.firebase = firebase;
    this.fbProvider = fbProvider;

    this.firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.loggedIn = true;
      } else {
        this.user = null;
        this.tokens = {};
        this.loggedIn = false;
      }
    });
  }

  get ref() {
    return this.firebase.database().ref();
  }

  @action fbLogin() {
    this.firebase.auth().signInWithPopup(this.fbProvider).then((result) => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      this.tokens.fb = result.credential.accessToken;
    });
  }
};