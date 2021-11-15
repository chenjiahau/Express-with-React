import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";

import Counter from "./components/counter/counter";
import Increase from "./components/increase/increase";
import Subtract from "./components/subtract/subtract";

import store from "./stores/index";

function App() {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Provider store={store}>
      <div className='container'>
        <form onSubmit={submitHandler}>
          <Counter />
          <Increase />
          <Subtract />
        </form>
      </div>
    </Provider>
  );
}

export default App;
