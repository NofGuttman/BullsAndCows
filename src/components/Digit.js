import React from 'react';
import colorList from '../colorList';

const Digit = ({value, digitNumber, clickHandler}) => {
  return(
    <button
      onClick={clickHandler}
      className={colorList[value]}
      value={value}
      name={digitNumber}>
    </button>
  );
}

export default Digit;