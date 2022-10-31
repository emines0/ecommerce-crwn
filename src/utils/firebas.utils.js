import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyD4RfcIEIpnJVqZDy5ruLFUU-K0Y0jCuWw",

  authDomain: "crwn-clothing-db-2b654.firebaseapp.com",

  projectId: "crwn-clothing-db-2b654",

  storageBucket: "crwn-clothing-db-2b654.appspot.com",

  messagingSenderId: "343469957665",

  appId: "1:343469957665:web:9c9853f75558b4c430f960"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Google authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWitGoogleRedirect = () => signInWithRedirect (auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users',  userAuth.uid) //database, collection, identifier
    const userSnapshot = await getDoc(userDocRef); //snapshot is sommething like data

    //if user data not exist
    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth; //these data are in userAuth object
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            })
            
        } catch (error) {
            console.log('error creating the user ', error.message);
        }
    }

    //if user data exist
    return userDocRef    
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return signInWithEmailAndPassword(auth, email, password);
}