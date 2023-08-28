import React, { useState } from 'react';
import TodoList from './components/ToDoList';
import './App.css';
import Clock from './components/Clock';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleTaskSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">"Master Your Day: Your Ultimate Task Checklist!" </h1>
      <div className="task-form">
        <form onSubmit={handleTaskSubmit}>
          <input
            type="text"
            className="task-input"
            value={newTask}
            onChange={handleTaskChange}
            placeholder="Enter a task..."
          />
          <button type="submit" className="add-task-button">
            Add Task
          </button>
        </form>
      </div>
      <TodoList tasks={tasks} onDelete={handleDelete} />
      <Clock/>
    </div>
  );
}

export default App;
