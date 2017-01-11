import Store from './Store';
import { app, facebookProvider } from './firebase';

const store = new Store(app, facebookProvider);

export default store;
