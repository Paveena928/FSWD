// src/TaskDashboard.jsx
import React, { useState } from 'react';

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Handle task input change
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Add a new task
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]); // Add new task to the state
      setNewTask('');  // Clear input field after adding task
    }
  };

  // Remove a task by index
  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);  // Update the tasks after removal
  };

  return (
    <div style={styles.dashboard}>
      <h1 style={styles.header}>Task Dashboard</h1>

      {/* Task input section */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task"
          style={styles.input}
        />
        <button onClick={handleAddTask} style={styles.button}>Add Task</button>
      </div>

      {/* Task list section */}
      <div style={styles.taskListContainer}>
        <h2 style={styles.taskListHeader}>Task List</h2>
        {tasks.length === 0 ? (
          <p>No tasks available. Add a new task!</p>
        ) : (
          <ul style={styles.taskList}>
            {tasks.map((task, index) => (
              <li key={index} style={styles.taskItem}>
                {task}
                <button
                  style={styles.removeButton}
                  onClick={() => handleRemoveTask(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const styles = {
  dashboard: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    maxWidth: '500px',
    margin: '0 670px',
    borderRadius: '8px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '75%',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  taskListContainer: {
    marginTop: '20px',
  },
  taskListHeader: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  taskList: {
    listStyleType: 'none',
    padding: '0',
  },
  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    margin: '8px 0',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  removeButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    fontSize: '14px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};

export default TaskDashboard;
