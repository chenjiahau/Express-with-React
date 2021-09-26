import React from "react";

const CountContext = React.createContext({
  count: 0,
  increase: (num) => {},
  subtract: (num) => {},
});

export default CountContext;
