import './App.scss';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, addTask, deleteTask } from './store';

function App() {
  const dispatch = useDispatch();
  const { isLoading, isLogin, tasks } = useSelector((state) => state.task);
  const [newTask, setNewTask] = React.useState("");
  const [account, setAccount] = React.useState("");

  const handleLogin = () => {
    if (!account) return;
    dispatch(login(account));
  }

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
      {
        isLoading ?
          (
            <div>Loading...</div>
          )
          : (
            <div>
              <h1>
                {isLogin && (`(${account})`)}Tasks
              </h1>
              <div className="form-container">
                <div className="label">Add</div>
                <div className="input">
                  <input
                    type="text"
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                  />
                </div>
                <div className="action">
                  <button onClick={handleAddTask}>Submit</button>
                </div>
              </div>
              {
                !isLogin && (
                  <div className="form-container">
                    <div className="label">Account</div>
                    <div className="input">
                      <input
                        type="text"
                        value={account}
                        onChange={e => setAccount(e.target.value)}
                      />
                    </div>
                    <div className="action">
                      <button onClick={handleLogin}>Submit</button>
                    </div>
                  </div>
                )
              }

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
          )
      }
    </div >
  );
}

export default App;
