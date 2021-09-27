import React, { Fragment, forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const type = props.type ? props.type : 'text';
  const defaultValue = props.defaultValue ? props.defaultValue : '';

  return (
    <Fragment>
      <input
        ref={ref}
        id={props.id}
        type="text"
        className='form-control'
        type={type}
        defaultValue={defaultValue}
        onClick={props.keypressHandler}
      />
    </Fragment>
  );
});

export default Input;
