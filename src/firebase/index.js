import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({
  apiKey: "AIzaSyBdjDEzcoEbyR3FZB3ZRTnQoOgJUTv203Y",
  authDomain: "coderhouse-myapp.firebaseapp.com",
  projectId: "coderhouse-myapp",
  storageBucket: "coderhouse-myapp.appspot.com",
  messagingSenderId: "682025090767",
  appId: "1:682025090767:web:c987e11f106da4f20f41ba"
});

export const getFirebase = () => {
  return app
}

export const getFirestore = () => {
  return firebase.firestore(app)
}