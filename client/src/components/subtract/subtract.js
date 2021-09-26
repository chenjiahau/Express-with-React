import React, { Fragment, useContext, useRef } from "react";
import CountContext from "../../stores/count/count-context";

const Subtract = (props) => {
  const countCtx = useContext(CountContext);
  const inputRef = useRef();

  const onKeypressHandler = (event) => {
    if (event.charCode !== 13) return;
    countCtx.subtract(+event.target.value);
  };

  const onClickHandler = () => {
    countCtx.subtract(+inputRef.current.value);
  };

  return (
    <Fragment>
      <div className='form-group'>
        <label htmlFor='subNum'>Subtract Number</label>
        <input
          ref={inputRef}
          id='subtractNum'
          type='number'
          className='form-control'
          min='1'
          max='100'
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
          Subtract
        </button>
      </div>
    </Fragment>
  );
};

export default Subtract;
