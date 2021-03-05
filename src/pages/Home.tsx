import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import App from '../components/App/App';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic To Do</IonTitle>
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
