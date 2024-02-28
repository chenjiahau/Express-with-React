import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { addTask } from "../../services";

const AddTask = () => {
  const queryClient = useQueryClient();

  const {
    isLoading: isAdding,
    mutate: addTaskMutation,
  } = useMutation({
    mutationFn: addTask,
    onError: (err) => {
      toast.error(err);
    },
    onSuccess: (data) => {
      toast.success(`Task added: [${data.id}]`);
      queryClient.invalidateQueries('tasks');
    }
  });

  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (!newTask) {
      return;
    }

    const task = {
      id: new Date().getTime(),
      title: newTask,
      completed: false,
    }

    setNewTask('');
    addTaskMutation(task);
  }

  return (
    <div className="block">
      <h1>
        Add a new task
      </h1>
      {
        isAdding ? (
          <>Processing</>
        ) : (
          <div className="form-container">
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
        )
      }
    </div>
  )
}

export default AddTask;