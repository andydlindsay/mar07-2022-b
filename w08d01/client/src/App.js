import './App.css';
// import TodoListItem from './components/TodoListItem';
import TodoList from './components/TodoList';
import {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    document.title = 'hello world';
    axios.get('/todos')
      .then((response) => {
        setTodos(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h2>Todo List App</h2>

      <TodoList todos={todos} />

      {/* <TodoListItem todo={todo} /> */}
    </div>
  );
};

export default App;
