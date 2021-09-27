import React, { Fragment, useContext, useRef } from "react";
import CountContext from "../../stores/count/count-context";
import Input from '../UI/Input';
import Button from '../UI/Button';

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
        <Input
          ref={inputRef}
          id='increaseNum'
          type='number'
          defaultValue='1'
          keypressHandler={onKeypressHandler}
        />
      </div>
      <div className='form-group'>
        <Button
          title='Increase'
          clickHandler={onClickHandler}
        />
      </div>
    </Fragment>
  );
};

export default Increase;
