import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyB8ypx5s9oiEzXd2rc0YY08-3HbOIurFq0",
    authDomain: "invoice-8a5e5.firebaseapp.com",
    projectId: "invoice-8a5e5",
    storageBucket: "invoice-8a5e5.appspot.com",
    messagingSenderId: "165280808537",
    appId: "1:165280808537:web:cb4ef4ed016f3f56a63b48"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();