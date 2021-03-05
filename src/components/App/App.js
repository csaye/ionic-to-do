import React, { useState } from 'react';
import { IonButton, IonInput } from '@ionic/react';

import './App.css';

function App() {
  const [text, setText] = useState('');

  function createToDo(e) {
    e.preventDefault();
    console.log(text);
    setText('');
  }

  return (
    <div className="container">
      <h1>New To Do</h1>
      <form onSubmit={createToDo}>
        <IonInput
        className="text-input"
        value={text}
        placeholder="text"
        onIonChange={e => setText(e.target.value)}
        required
        />
        <IonButton type="submit">Submit</IonButton>
      </form>
    </div>
  );
}

export default App;
