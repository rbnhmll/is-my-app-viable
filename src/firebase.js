import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCScWItcz902NqJ9hIFaoYWTGMyqSLJbiM',
  authDomain: 'is-my-app-viable.firebaseapp.com',
  databaseURL: 'https://is-my-app-viable.firebaseio.com',
  projectId: 'is-my-app-viable',
  storageBucket: '',
  messagingSenderId: '627099141230',
};

firebase.initializeApp(config);
export default firebase;
