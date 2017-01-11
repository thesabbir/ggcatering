import { observable, action } from 'mobx';

export default class Menu {
  constructor(firebase) {
    this.firebase = firebase;
  }

  @action add(menu) {
    return this.firebase.db.ref().child('menus').push(menu);
  }
}
