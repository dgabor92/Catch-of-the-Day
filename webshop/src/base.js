import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCqt9jc2rzcSRMPvoPuiLSX-ZP9JjWa-Ho",
  authDomain: "catch-of-the-day-gabor.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-gabor.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
