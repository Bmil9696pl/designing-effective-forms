
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "a",
  authDomain: "tpf-pk-a8dcd.firebaseapp.com",
  projectId: "tpf-pk-a8dcd",
  storageBucket: "tpf-pk-a8dcd.appspot.com",
  messagingSenderId: "36000463385",
  appId: "1:36000463385:web:31f560b9d2cf3a5b3b8888"
};
// Initialize Firebase
//a
const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const userSignIn = async () => {
    signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        console.log(user);
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
    }
    const userSignOut = async () => {
      signOut(auth).then(() => {
          alert("You have been signed out!")
      }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
      })
   }
   onAuthStateChanged(auth, (user) => {
    if (user) {
        alert("You are authenticated with Google");
        console.log(user);
    }
 })
signInButton.addEventListener("click", userSignIn);
signOutButton.addEventListener("click", userSignOut);