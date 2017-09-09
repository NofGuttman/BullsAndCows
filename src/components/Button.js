import React from 'react';

const Button = ({clickHandler, text, style}) => {
  return(
    <button className={style} onClick={clickHandler} >{text}</button>
  );
}

export default Button;