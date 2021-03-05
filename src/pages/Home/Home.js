import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import App from '../../components/App/App';
import SignOut from '../../components/SignOut/SignOut';
import './Home.css';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from '../../util/firebaseConfig.js';
import { useAuthState } from 'react-firebase-hooks/auth';

// initialize firebase
firebase.initializeApp(firebaseConfig);

function Home() {
  useAuthState(firebase.auth());

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="toolbar-items">
            <IonTitle>Ionic To Do</IonTitle>
            <SignOut />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <App />
      </IonContent>
    </IonPage>
  );
};

export default Home;
