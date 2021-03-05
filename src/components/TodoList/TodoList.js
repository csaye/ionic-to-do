import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Todo from '../Todo/Todo';

// TodoList component
function TodoList() {
  const query = firebase.firestore().collection('todos').orderBy('createdAt', 'desc');
  const [todos] = useCollectionData(query, {idField: 'id'});

  return (
    <div className="TodoList">
      {
        todos?.map(t => <Todo key={t.id} data={t} />)
      }
    </div>
  )
}

export default TodoList;
