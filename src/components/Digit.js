import React from 'react';

const Digit = ({value, style, digitNumber, clickHandler}) => {
  return(
    <button
      onClick={clickHandler}
      className={style}
      value={value}
      name={digitNumber}>
    </button>
  );
}

export default Digit;