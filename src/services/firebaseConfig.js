

import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDYXo3CePsw8A8cIgpMhwdSuxHeZzLGd0M',
  authDomain: 'alertavida-c7efb.firebaseapp.com',
  projectId: 'alertavida-c7efb',
  storageBucket: 'alertavida-c7efb.appspot.com',
  messagingSenderId: '72223675305',
  appId: '1:72223675305:web:1c7f2eeff5fe347757eab8',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
