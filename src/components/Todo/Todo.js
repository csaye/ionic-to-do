import './Todo.css';
import { IonButton } from '@ionic/react';

import firebase from 'firebase/app';

// Todo component
function Todo(props) {
  const { text, id } = props.data;

  // deletes todo from firebase
  async function deleteToDo() {
    await firebase.firestore().collection('todos').doc(id).delete();
  }

  return (
    <div className="Todo">
      <p>{text}</p>
      <IonButton onClick={deleteToDo}>Delete To Do</IonButton>
    </div>
  )
}

export default Todo;
