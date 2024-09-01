import React from 'react';
import TodoList from './components/TodoList'; // Import the TodoList component
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <TodoList /> {/* Render the TodoList component */}
      </header>
    </div>
  );
}

export default App;
