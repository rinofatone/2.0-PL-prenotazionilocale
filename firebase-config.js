const firebaseConfig = {

apiKey: "INSERISCI_LA_NUOVA_API_KEY",
authDomain: "prenotalocale.firebaseapp.com",
projectId: "prenotalocale",
storageBucket: "prenotalocale.appspot.com",
messagingSenderId: "XXXXX",
appId: "XXXXX"

};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
