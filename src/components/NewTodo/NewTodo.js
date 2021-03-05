import './NewTodo.css';

import React, { useState } from 'react';
import { IonButton, IonInput } from '@ionic/react';

import firebase from 'firebase/app';

// NewTodo component
function NewTodo() {
  const [text, setText] = useState('');

  async function createToDo(e) {
    e.preventDefault();
    const toDoText = text;
    setText('');
    await firebase.firestore().collection('todos').add({
      text: toDoText,
      createdAt: new Date(),
      uid: firebase.auth().currentUser.uid,
      complete: false
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
