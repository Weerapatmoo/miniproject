 import firebase from 'firebase'; 
 
 const firebaseConfig = {
    apiKey: "AIzaSyCltPds5jVQCfuyxR3HrAGj78SpCwDnVJo",
    authDomain: "mini-project-528a4.firebaseapp.com",
    databaseURL: "https://mini-project-528a4.firebaseio.com",
    projectId: "mini-project-528a4",
    storageBucket: "mini-project-528a4.appspot.com",
    messagingSenderId: "293438143416",
    appId: "1:293438143416:web:cd373a2070e35799ae2d4d",
    measurementId: "G-TLYPPTHH2F"
  };

const fig = firebase.initializeApp(firebaseConfig );
export default fig;