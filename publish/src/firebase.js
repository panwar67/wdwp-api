import firebase from 'firebase';
const config = {
    apiKey: 'AIzaSyDoTWv_oMwAF6IA4syJpM7ihzHR3pxUN9Y',
    authDomain: 'wdwp-admin.firebaseapp.com',
    databaseURL: 'https://wdwp-admin.firebaseio.com',
    projectId: 'wdwp-admin',
    storageBucket: '',
    messagingSenderId: '864005597958',
    appId: "1:864005597958:web:623705a68fcc8ac7"
};
firebase.initializeApp(config);
export default firebase;