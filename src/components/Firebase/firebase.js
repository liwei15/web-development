import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyCwwoTmZ2x1ZinhnXqauJbKvDgN_0NiH4M",
  authDomain: "web-development-1be9e.firebaseapp.com",
  databaseURL: "https://web-development-1be9e.firebaseio.com",
  projectId: "web-development-1be9e",
  storageBucket: "web-development-1be9e.appspot.com",
  messagingSenderId: "310279087487",
};
class Firebase {
    constructor() {
      app.initializeApp(config);
  
      this.auth = app.auth();
      this.db = app.database();
    }
  
    // *** Auth API ***
  
    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
  
    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
  
    doSignOut = () => this.auth.signOut();
  
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  
    // *** User API ***
  
    user = uid => this.db.ref(`users/${uid}`);
  
    users = () => this.db.ref('users');
  }
  
  export default Firebase;