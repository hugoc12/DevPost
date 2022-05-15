import { initializeApp } from 'firebase/app';
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAgF09FVWVYxKxJj-d1IR73WGRw-99zPXI",
  authDomain: "devpost-1af3d.firebaseapp.com",
  databaseURL: "https://devpost-1af3d-default-rtdb.firebaseio.com",
  projectId: "devpost-1af3d",
  storageBucket: "devpost-1af3d.appspot.com",
  messagingSenderId: "529825212087",
  appId: "1:529825212087:web:90950030174bbc19d5cf32"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

export const auth = getAuth(firebaseApp);
export const database = getDatabase(firebaseApp);