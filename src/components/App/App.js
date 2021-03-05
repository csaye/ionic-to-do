import './App.css';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from '../../util/firebaseConfig.js';
// import { useAuthState } from 'react-firebase-hooks/auth';

import NewTodo from '../NewTodo/NewTodo';
import TodoList from '../TodoList/TodoList';

// initialize firebase
firebase.initializeApp(firebaseConfig);

// App component
function App() {
  // useAuthState(firebase.auth());

  return (
    <div className="App">
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;
