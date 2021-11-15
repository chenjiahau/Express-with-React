const defaultState = { counter: 0 };

const counterReducer = (state = defaultState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + action.payload,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - action.payload,
    };
  }

  return state;
};

export default counterReducer;
