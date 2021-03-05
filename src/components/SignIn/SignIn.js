import './SignIn.css';

import { IonButton } from '@ionic/react';

import firebase from 'firebase/app';

// SignIn component
function SignIn() {
  // opens google sign in popup
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  return (
    <div className="SignIn">
      <IonButton onClick={signInWithGoogle}>Sign in with Google</IonButton>
    </div>
  )
}

export default SignIn;
