import './Todo.css';

import React, { useState, useEffect } from 'react';
import { IonButton, IonLabel, IonCheckbox, IonItem } from '@ionic/react';

import firebase from 'firebase/app';

// Todo component
function Todo(props) {
  const { text, createdAt, id, complete } = props.data;
  const date = createdAt.toDate();

  const [todoComplete, setTodoComplete] = useState(complete);

  // deletes todo from firebase
  async function deleteToDo() {
    await firebase.firestore().collection('todos').doc(id).delete();
  }

  async function updateComplete(e) {
    const isComplete = e.target.checked;
    setTodoComplete(isComplete);
    await firebase.firestore().collection('todos').doc(id).update({
      complete: isComplete
    });
  }

  return (
    <div className="Todo">
      <h1>{text}</h1>
      <p>{date.toDateString() + ', ' + date.toLocaleTimeString()}</p>
      <IonItem className="ion-item">
        <IonLabel>Completed</IonLabel>
        <IonCheckbox checked={todoComplete} onIonChange={updateComplete} />
      </IonItem>
      <IonButton onClick={deleteToDo}>Delete To Do</IonButton>
    </div>
  )
}

export default Todo;
