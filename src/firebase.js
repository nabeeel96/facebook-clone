import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAeqQGkSXLITQjy9XKfBA4PjDnRnJ1Pe88',
  authDomain: 'facebook-clone-71a41.firebaseapp.com',
  projectId: 'facebook-clone-71a41',
  storageBucket: 'facebook-clone-71a41.appspot.com',
  messagingSenderId: '533713950638',
  appId: '1:533713950638:web:2802902bbfc5265409da3f',
  measurementId: 'G-0LB6F2J6H9',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
