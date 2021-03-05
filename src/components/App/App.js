import React, { useState } from 'react';
import { IonButton, IonInput } from '@ionic/react';

import './App.css';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from '../../util/firebaseConfig.js';
import { useAuthState } from 'react-firebase-hooks/auth';

// initialize firebase
firebase.initializeApp(firebaseConfig);

// App component
function App() {
  useAuthState(firebase.auth());

  const [text, setText] = useState('');

  function createToDo(e) {
    e.preventDefault();
    console.log(text);
    setText('');
  }

  return (
    <div className="App">
      <h1>New To Do</h1>
      <form onSubmit={createToDo}>
        <IonInput
        className="text-input"
        value={text}
        placeholder="text"
        onIonChange={e => setText(e.target.value)}
        required
        />
        <IonButton type="submit" className="submit-button">Create</IonButton>
      </form>
    </div>
  );
}

export default App;
