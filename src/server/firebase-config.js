import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDz_EL8uif9hokgE9GTDXGVvF9Omf8-N_E",
    authDomain: "fir-react-88992.firebaseapp.com",
    projectId: "fir-react-88992",
    storageBucket: "fir-react-88992.appspot.com",
    messagingSenderId: "1012982430054",
    appId: "1:1012982430054:web:a25668fbd17b35aa19f0a7"
}

firebase.initializeApp(firebaseConfig);
export const firebaseApp = firebase