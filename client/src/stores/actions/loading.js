const hideLoadingAction = () => {
  return {
    type: "HIDE_LOADING",
  };
};

const showLoadingAction = () => {
  return {
    type: "SHOW_LOADING",
  };
};

export const hideLoading = () => {
  return (dispatch) => {
    dispatch(hideLoadingAction());
  };
};

export const showLoading = () => {
  return (dispatch) => {
    dispatch(showLoadingAction());
  };
};
