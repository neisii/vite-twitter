import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3vHh80n8NSjdTWmdb8AiRW8_hk9ixPuk",
    authDomain: "vite-twitter.firebaseapp.com",
    projectId: "vite-twitter",
    storageBucket: "vite-twitter.appspot.com",
    messagingSenderId: "265946182705",
    appId: "1:265946182705:web:cd04b36cece24a013e5110",
    measurementId: "G-35KCYCNCHH"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

export const USER_COLEECTION = db.collection('users')
export const TWEET_COLEECTION = db.collection('tweets')
export const COMMENT_COLLECTION = db.collection('comments')
export const RETWEET_COLLECTION = db.collection('retweets')
export const LIKE_COLLECTION = db.collection('likes')
export const MESSAGE_COLLECTION = db.collection('messages')
