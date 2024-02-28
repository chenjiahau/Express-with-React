import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getTasks } from "../services";

const TaskList = () => {
  const {
    isLoading,
    data: tasks,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  const handleDeleteTask = () => {
  }

  return (
    <div className="block">
      {
        isLoading ? (
          <>Loading</>
        ) : (
          <div>
            {
              tasks.map((task) => (
                <div className="list-container" key={task.id}>
                  <div className="label" >
                    {task.title}
                  </div>
                  <div className="action">
                    <button onClick={handleDeleteTask}>
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