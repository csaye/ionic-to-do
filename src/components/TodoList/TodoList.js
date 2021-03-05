import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import './TodoList.css';

import { IonSpinner } from '@ionic/react';

import Todo from '../Todo/Todo';

// TodoList component
function TodoList() {
  const uid = firebase.auth().currentUser.uid;

  // get todos from user ordered by date
  const query = firebase.firestore().collection('todos')
  .where('uid', '==', uid).orderBy('createdAt', 'desc');
  const [todos] = useCollectionData(query, {idField: 'id'});

  if (!todos) {
    return (
      <div className="TodoList">
        <IonSpinner className="spinner" />
      </div>
    );
  }

  return (
    <div className="TodoList">
      {
        todos.map(t => <Todo key={t.id} data={t} />)
      }
    </div>
  )
}

export default TodoList;
