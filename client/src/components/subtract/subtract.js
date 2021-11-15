import React, { Fragment, useRef } from "react";
import { useDispatch } from "react-redux";

import { decrement } from "../../stores/actions/counter";

import Input from "../UI/Input";
import Button from "../UI/Button";

const Subtract = (props) => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(decrement(+inputRef.current.value));
  };

  return (
    <Fragment>
      <div className='form-group'>
        <label htmlFor='subNum'>Subtract Number</label>
        <Input ref={inputRef} id='subtractNum' type='number' defaultValue='1' />
      </div>
      <div className='form-group'>
        <Button title='Subtract' clickHandler={onClickHandler} />
      </div>
    </Fragment>
  );
};

export default Subtract;
