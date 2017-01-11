import { observable, action } from 'mobx';

export default class Auth {
  @observable user = null;
  @observable tokens = {};
  @observable loggedIn = false;

  constructor(firebase, facebookProvider) {
    this.firebase = firebase;
    this.facebookProvider = facebookProvider;

    this.authChangeInterceptor();
  }

  @action fbLogin() {
    this.firebase.auth().signInWithPopup(this.facebookProvider).then((result) => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      this.tokens.fb = result.credential.accessToken;
    });
  }

  @action authChangeInterceptor() {
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
};