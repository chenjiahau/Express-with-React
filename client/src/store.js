import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const initialStateTask = {
  isLoading: false,
  isLogin: false,
  account: '',
  tasks: [
  ],
};

const taskReducer = (state = initialStateTask, action) => {
  switch (action.type) {
    case "task/loading":
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case "task/login":
      return {
        ...state,
        isLogin: true,
        account: action.payload,
        tasks: [
          ...state.tasks,
          ...action.payload.tasks,
        ]
      };
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

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const login = (account) => {
  return async (dispatch) => {
    dispatch({ type: "task/loading" });
    try {
      fetch(`tasks/${account}`)
        .then((response) => response.json())
        .then((tasks) => {
          dispatch({
            type: "task/login", payload: { account, tasks }
          });
          dispatch({ type: "task/loading" });
        });
    } catch (error) {
      console.log(error);
    }
  }
}

export const addTask = (title) => {
  return { type: "task/add", payload: title };
}

export const deleteTask = (id) => {
  return { type: "task/delete", payload: id };
}
