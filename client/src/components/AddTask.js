import { useState } from "react";

const AddTasks = ({ tasks }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
  }

  return (
    <div className="block">
      <h1>
        Add a new task
      </h1>
      <div className="form-container">
        <div className="input">
          <input
            type="text"
            value={newTask}
            onChange={e => { }}
          />
        </div>
        <div className="action">
          <button onClick={handleAddTask}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default AddTasks;