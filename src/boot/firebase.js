import Vue from 'vue';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { firestorePlugin } from 'vuefire';

Vue.use(firestorePlugin);

const firebaseConfig = {
  apiKey: 'AIzaSyBCrs2dhQUh1mHzUOwD5B2spOmtx7o7L3w',
  authDomain: 'vuemeetup-48b6a.firebaseapp.com',
  databaseURL: 'https://vuemeetup-48b6a.firebaseio.com',
  projectId: 'vuemeetup-48b6a',
  storageBucket: 'vuemeetup-48b6a.appspot.com',
  messagingSenderId: '114640540435',
  appId: '1:114640540435:web:a0f6e1e7f2dac0511800e6',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAuth = firebaseApp.auth();
const firebaseDb = firebaseApp.firestore();
const firebaseStorage = firebaseApp.storage();

export { firebaseAuth, firebaseDb, firebaseStorage };
