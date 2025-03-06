import React, { useState } from 'react';

function App() {
  // State variable to hold the list of tasks
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Function to add a new task
  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  // Function to remove a task
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.length === 0 ? (
          <p>No tasks yet!</p>
        ) : (
          tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
