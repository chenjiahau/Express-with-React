import React, { Fragment } from "react";

const Button = (props) => {
  return (
    <Fragment>
      <button
        type='button'
        className='btn btn-primary'
        onClick={props.clickHandler}
      >
        {props.title}
      </button>
    </Fragment>
  );
};

export default Button;
