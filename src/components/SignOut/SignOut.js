import './SignOut.css';

import { IonButton } from '@ionic/react';

import firebase from 'firebase/app';

function SignOut() {
  function signOutUser() {
    firebase.auth().signOut();
  }

  return (
    <div className="SignOut">
      {
        firebase.auth().currentUser &&
        <div className="auth-items">
          <p>Signed in as {firebase.auth().currentUser.displayName}</p>
          <IonButton className="ion-button" onClick={signOutUser}>Sign Out</IonButton>
        </div>
      }
    </div>
  );
}

export default SignOut;
