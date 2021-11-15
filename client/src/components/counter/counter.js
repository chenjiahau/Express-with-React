import react, { Fragment } from "react";
import { useSelector } from "react-redux";

const Count = () => {
  const loadingState = useSelector((state) => state.loading.state);
  const counter = useSelector((state) => state.counter.counter);

  return (
    <Fragment>
      {loadingState && <div>Loading</div>}
      <h1>Counter: {counter}</h1>
    </Fragment>
  );
};

export default Count;
