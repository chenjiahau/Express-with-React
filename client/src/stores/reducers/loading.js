const defaultState = { state: false };

const loadingReducer = (state = defaultState, action) => {
  if (action.type === "HIDE_LOADING") {
    return {
      state: false,
    };
  }

  if (action.type === "SHOW_LOADING") {
    return {
      state: true,
    };
  }

  return state;
};

export default loadingReducer;
