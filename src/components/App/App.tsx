import {
  IonButton
} from '@ionic/react';

import './App.css';

interface ContainerProps { }

const App: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <IonButton onClick={() => console.log('Hello World')}>Hello World</IonButton>
    </div>
  );
};

export default App;
