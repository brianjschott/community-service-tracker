import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCOpFdAt300RPNZjgXu_SeHT5iralm_oNY",
    authDomain: "community-service-tracke-ff4e8.firebaseapp.com",
    databaseURL: "https://community-service-tracke-ff4e8.firebaseio.com",
    projectId: "community-service-tracke-ff4e8",
    storageBucket: "",
    messagingSenderId: "284656276123",
    appId: "1:284656276123:web:813b2747c2916a44"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
