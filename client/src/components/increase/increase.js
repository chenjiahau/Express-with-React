import React, { Fragment, useContext, useRef } from "react";
import CountContext from "../../stores/count/count-context";

const Increase = (props) => {
  const countCtx = useContext(CountContext);
  const inputRef = useRef();

  const onKeypressHandler = (event) => {
    if (event.charCode !== 13) return;
    countCtx.increase(+event.target.value);
  };

  const onClickHandler = () => {
    countCtx.increase(+inputRef.current.value);
  };

  return (
    <Fragment>
      <div className='form-group'>
        <label htmlFor='addNum'>Increase Number</label>
        <input
          ref={inputRef}
          id='increaseNum'
          type='number'
          min='1'
          max='100'
          className='form-control'
          defaultValue={1}
          onKeyPress={onKeypressHandler}
        />
      </div>
      <div className='form-group'>
        <button
          type='button'
          className='btn btn-primary'
          onClick={onClickHandler}
        >
          Increase
        </button>
      </div>
    </Fragment>
  );
};

export default Increase;
