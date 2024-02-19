import { combineReducers, createStore } from "redux";

const initialStateTask = {
  tasks: [
  ],
};

const taskReducer = (state = initialStateTask, action) => {
  switch (action.type) {
    case "task/add":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), title: action.payload },
        ],
      };
    case "task/delete":
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.id !== action.payload
        ),
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  task: taskReducer
});

export const store = createStore(rootReducer);

export const addTask = (title) => {
  return { type: "task/add", payload: title };
}

export const deleteTask = (id) => {
  return { type: "task/delete", payload: id };
}
