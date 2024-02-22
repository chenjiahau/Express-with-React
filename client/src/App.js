import './App.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  log, loading, login, addTask, deleteTask,
  getIsLogin, getIsLoading, getTasks
} from './store/reducers/task';
import store from './store';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const isLogin = useSelector(getIsLogin);
  const tasks = useSelector(getTasks);
  const [newTask, setNewTask] = useState("");
  const [account, setAccount] = useState("");

  const handleLogin = () => {
    if (!account) return;
    dispatch(loading());
    setTimeout(() => {
      dispatch(login(account));
    }, 1000);
  }

  const handleAddTask = () => {
    if (!newTask) return;
    setNewTask("");
    dispatch(loading());
    setTimeout(() => {
      dispatch(addTask(newTask));
    }, 1000);
  }

  const handleDeleteTask = (id) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(deleteTask(id));
    }, 1000);
  }

  useEffect(() => {
    store.dispatch(log(new Date().toISOString()));
  }, [tasks]);

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
