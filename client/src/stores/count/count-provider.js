import { useReducer } from "react";
import CountContext from "./count-context";

const defaultCountState = { count: 0 };
const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        count: state.count + action.num,
      };
    case "SUBTRACT":
      return {
        count: state.count - action.num,
      };
    default:
      return defaultCountState;
  }
};

const CountProvider = (props) => {
  const [countState, dispatchCountAction] = useReducer(
    countReducer,
    defaultCountState
  );

  const increaseHandler = (num) => {
    dispatchCountAction({ type: "INCREASE", num: num });
  };

  const subtractHandler = (num) => {
    dispatchCountAction({ type: "SUBTRACT", num: num });
  };

  const countContext = {
    count: countState.count,
    increase: increaseHandler,
    subtract: subtractHandler,
  };

  return (
    <CountContext.Provider value={countContext}>
      {props.children}
    </CountContext.Provider>
  );
};

export default CountProvider;
