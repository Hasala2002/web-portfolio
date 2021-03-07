var firebaseConfig = {
  apiKey: "AIzaSyCLUv_FVsp3vfbJPsikwOj-7zprKS-Plr0",
  authDomain: "raid-home.firebaseapp.com",
  databaseURL: "https://raid-home.firebaseio.com",
  projectId: "raid-home",
  storageBucket: "raid-home.appspot.com",
  messagingSenderId: "529243337115",
  appId: "1:529243337115:web:81ad4656fd4a55e033713e",
  measurementId: "G-H05NB497SX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let formName = document.getElementById('formName')
let formEmail = document.getElementById('formEmail')
let formSubject = document.getElementById('formSubject')
let formMessage = document.getElementById('formMessage')

const sendMessage = () =>{

 let messageData = {
   name : formName.value,
   email : formEmail.value,
   subject : formSubject.value,
   message : formMessage.value
 }
 if (!Object.values(messageData).includes(null) && !Object.values(messageData).includes("")) {
  db.collection('messages').add({...messageData})
  alert('Message Sent')
 }
 formName.value=""
 formEmail.value=""
 formSubject.value=""
 formMessage.value=""
}