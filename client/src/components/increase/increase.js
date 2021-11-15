import React, { Fragment, useRef } from "react";
import { useDispatch } from "react-redux";

import { increment } from "../../stores/actions/counter";

import Input from "../UI/Input";
import Button from "../UI/Button";

const Increase = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(increment(+inputRef.current.value));
  };

  return (
    <Fragment>
      <div className='form-group'>
        <label htmlFor='addNum'>Increase Number</label>
        <Input ref={inputRef} id='increaseNum' type='number' defaultValue='1' />
      </div>
      <div className='form-group'>
        <Button title='Increase' clickHandler={onClickHandler} />
      </div>
    </Fragment>
  );
};

export default Increase;
