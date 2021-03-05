import './Todo.css';
import { IonButton } from '@ionic/react';

import firebase from 'firebase/app';

// Todo component
function Todo(props) {
  const { text, createdAt, id } = props.data;
  const date = createdAt.toDate();

  // deletes todo from firebase
  async function deleteToDo() {
    await firebase.firestore().collection('todos').doc(id).delete();
  }

  return (
    <div className="Todo">
      <h1>{text}</h1>
      <p>{date.toDateString() + ', ' + date.toLocaleTimeString()}</p>
      <IonButton onClick={deleteToDo}>Delete To Do</IonButton>
    </div>
  )
}

export default Todo;
