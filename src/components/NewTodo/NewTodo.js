import './NewTodo.css';

import React, { useState } from 'react';
import { IonButton, IonInput } from '@ionic/react';

import firebase from 'firebase/app';

function NewTodo() {

  const [text, setText] = useState('');

  async function createToDo(e) {
    e.preventDefault();
    const toDoText = text;
    setText('');
    await firebase.firestore().collection('todos').add({
      text: toDoText
    });
  }

  return (
    <div className="NewTodo">
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
  )
}

export default NewTodo;