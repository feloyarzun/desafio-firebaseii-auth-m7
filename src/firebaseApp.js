// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDM9T3agmlEUNB75BwHip5rAEPSzl_d2qg',
  authDomain: 'fir-auth-f25e1.firebaseapp.com',
  projectId: 'fir-auth-f25e1',
  storageBucket: 'fir-auth-f25e1.appspot.com',
  messagingSenderId: '446678635252',
  appId: '1:446678635252:web:b19a1513ab24990bf784a1'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const $auth = getAuth(app)

export { $auth }
