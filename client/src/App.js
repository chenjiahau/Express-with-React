import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import CountProvider from "./stores/count/count-provider";
import Count from "./components/count/count";
import Increase from "./components/increase/increase";
import Subtract from "./components/subtract/subtract";

function App() {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <CountProvider>
      <div className='container'>
        <form onSubmit={submitHandler}>
          <Count />
          <Increase />
          <Subtract />
        </form>
      </div>
    </CountProvider>
  );
}

export default App;
