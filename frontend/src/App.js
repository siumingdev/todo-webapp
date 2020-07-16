import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// following this tutorial: https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks

const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ])
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
