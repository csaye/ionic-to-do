import './TodoList.css';

import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function TodoList() {
  const query = firebase.firestore().collection('todos').orderBy('text');
  const [todos] = useCollectionData(query, {idField: 'id'});

  return (
    <div className="TodoList">
      {
        todos?.map(t => <p key={t.id}>{t.text}</p>)
      }
    </div>
  )
}

export default TodoList;
