import { showLoading, hideLoading } from "./loading";

const incrementAction = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

const decrementAction = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};

export const increment = (num) => {
  return (dispatch) => {
    dispatch(showLoading());
    setTimeout(() => {
      dispatch(incrementAction(num));

      setTimeout(() => {
        dispatch(hideLoading());
      }, 1000);
    });
  };
};

export const decrement = (num) => {
  return (dispatch) => {
    dispatch(showLoading());
    setTimeout(() => {
      dispatch(decrementAction(num));

      setTimeout(() => {
        dispatch(hideLoading());
      }, 1000);
    });
  };
};
