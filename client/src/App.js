import "./App.scss";
import { useState } from "react";
import { Toaster } from 'react-hot-toast';

import AddTask from './components/AddTask';
import TaskList from "./components/TaskList";

const defaultPage = {
  addTask: false,
  taskList: true
}

function App() {
  const [page, setPage] = useState(defaultPage);

  const goto = (page) => {
    setPage(state => {
      return {
        ...page,
        [page]: true,
      };
    })
  }

  return (
    <div className="container">
      <div className="header">
        <button
          className={page.addTask ? 'active' : ''}
          onClick={() => goto('addTask')}
        >
          Add a new task
        </button>
        <button
          className={page.taskList ? 'active' : ''}
          onClick={() => goto('taskList')}
        >
          View tasks
        </button>
      </div>
      {page.addTask && <AddTask />}
      {page.taskList && <TaskList />}

      <Toaster />
    </div>

  );
}

export default App;