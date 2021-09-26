import React, { useContext } from "react";
import CountContext from "../../stores/count/count-context";

const Count = (props) => {
  const countCtx = useContext(CountContext);
  const count = countCtx.count;

  return <h1>Count: {count}</h1>;
};

export default Count;
