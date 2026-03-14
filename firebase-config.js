const firebaseConfig = {

apiKey: "AIzaSyBfHmFNM-BmWw-q_HA8kI7VH3rtc8WdPM4",
authDomain: "prenotalocale.firebaseapp.com",
projectId: "prenotalocale",
storageBucket: "prenotalocale.appspot.com",
messagingSenderId: "XXXXX",
appId: "XXXXX"

};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
