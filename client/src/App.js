import './App.scss';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from './store';

function App() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.task);
  const [newTask, setNewTask] = React.useState("");

  const handleAddTask = () => {
    if (!newTask) return;
    setNewTask("");
    dispatch(addTask(newTask));
  }

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  }

  return (
    <div className="container">
      <div>
        <div className="list-header-container">
          <h1>Tasks</h1>
          <div className="action">
            <div>
              <input
                type="text"
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
              />
            </div>
            <button onClick={handleAddTask}>Add</button>
          </div>
        </div>
        {
          tasks.map((task) => (
            <div className="list-container" key={task.id}>
              <div className="label" >
                {task.title}
              </div>
              <div className="action">
                <button onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        }
      </div >
    </div >
  );
}

export default App;
