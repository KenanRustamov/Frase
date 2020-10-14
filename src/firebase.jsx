import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyD0zM8vnk7rrUjHBP3pa-tlPnzYTYC_0Wg",
    authDomain: "frase-55882.firebaseapp.com",
    databaseURL: "https://frase-55882.firebaseio.com",
    projectId: "frase-55882",
    storageBucket: "frase-55882.appspot.com",
    messagingSenderId: "893560306153",
    appId: "1:893560306153:web:6fbc1ace5e4d5637747378",
    measurementId: "G-SZWZNSBG1D"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();