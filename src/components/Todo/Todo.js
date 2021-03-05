import './Todo.css';

import React, { useState, useEffect } from 'react';
import { IonButton, IonLabel, IonCheckbox, IonItem } from '@ionic/react';

import firebase from 'firebase/app';

// Todo component
function Todo(props) {
  const { text, createdAt, id, complete } = props.data;
  const date = createdAt.toDate();

  const [todoComplete, setTodoComplete] = useState(complete);
  const [deleting, setDeleting] = useState(false);

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
      <p className="date-string">{date.toDateString() + ', ' + date.toLocaleTimeString()}</p>
      <IonItem className="ion-item">
        <IonLabel>Completed</IonLabel>
        <IonCheckbox checked={todoComplete} onIonChange={updateComplete} />
      </IonItem>
      {
        deleting ?
        <>
          <p className="really-delete">Delete permanently?</p>
          <IonButton onClick={() => setDeleting(false)}>Cancel</IonButton>
          <IonButton color="danger" onClick={deleteToDo}>Delete</IonButton>
        </> :
        <IonButton color="danger" onClick={() => setDeleting(true)}>Delete</IonButton>
      }
    </div>
  )
}

export default Todo;
