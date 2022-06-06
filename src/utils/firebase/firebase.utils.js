// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
    GoogleAuthProvider,
    getAuth,
    signInWithRedirect,
    signInWithPopup
} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBMU0IMM1hB_KK8EN8fhL-8wV9Ni6FVvI",
    authDomain: "crwn-clothing-db-4218d.firebaseapp.com",
    projectId: "crwn-clothing-db-4218d",
    storageBucket: "crwn-clothing-db-4218d.appspot.com",
    messagingSenderId: "297129775067",
    appId: "1:297129775067:web:bf41cd49abef003dae61fe"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)