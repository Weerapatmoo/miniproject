import firebase from 'firebase';

firebase.initializeApp(config);
const auth = firebase.auth
const provider = new firebase.auth.FacebookAuthProvider();
export default provider;
