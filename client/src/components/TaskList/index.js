import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { getTasks, deleteTask } from "../../services";

const TaskList = () => {
  const queryClient = useQueryClient();
  const {
    isLoading,
    data: tasks,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  const {
    isLoading: isDeleting,
    mutate: deleteTaskMutation,
  } = useMutation({
    mutationFn: deleteTask,
    onError: (err) => {
      toast.error(err);
    },
    onSuccess: (data) => {
      toast.success(`Task deleted: [${data.id}]`);
      queryClient.invalidateQueries('tasks');
    }
  });

  const handleDeleteTask = (id) => {
    deleteTaskMutation(id);
  }

  return (
    <div className="block">
      {
        (isLoading || isDeleting) ? (
          <>Loading</>
        ) : (
          <div>
            {
              tasks.map((task) => (
                <div className="list-container" key={task.id}>
                  <div className="label" >
                    [{task.id}]{task.title}
                  </div>
                  <div className="action">
                    <button onClick={() => handleDeleteTask(task.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default TaskList;