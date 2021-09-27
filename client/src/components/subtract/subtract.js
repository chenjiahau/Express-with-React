import React, { Fragment, useContext, useRef } from "react";
import CountContext from "../../stores/count/count-context";
import Input from '../UI/Input';
import Button from '../UI/Button';

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
        <Input
          ref={inputRef}
          id='subtractNum'
          type='number'
          defaultValue='1'
          keypressHandler={onKeypressHandler}
        />
      </div>
      <div className='form-group'>
        <Button
          title='Subtract'
          clickHandler={onClickHandler}
        />
      </div>
    </Fragment>
  );
};

export default Subtract;
