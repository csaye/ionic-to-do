import './App.css';

import firebase from 'firebase/app';

import NewTodo from '../NewTodo/NewTodo';
import TodoList from '../TodoList/TodoList';
import SignIn from '../SignIn/SignIn';

// App component
function App() {
  return (
    <div className="App">
      {
        firebase.auth().currentUser ?
        <>
          <NewTodo />
          <TodoList />
        </> :
        <SignIn />
      }
    </div>
  );
}

export default App;
