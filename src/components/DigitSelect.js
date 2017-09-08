import React from 'react';
import Digit from './Digit';

const DigitSelect = ({digitNumber, clickHandler}) => {
  return(
    <div className="select">
      <h1>{digitNumber + 1}</h1>
      <Digit digitNumber={digitNumber} clickHandler={clickHandler} value={0} />
      <Digit digitNumber={digitNumber} clickHandler={clickHandler} value={1} />
      <Digit digitNumber={digitNumber} clickHandler={clickHandler} value={2} />
      <Digit digitNumber={digitNumber} clickHandler={clickHandler} value={3} />
      <Digit digitNumber={digitNumber} clickHandler={clickHandler} value={4} />
      <Digit digitNumber={digitNumber} clickHandler={clickHandler} value={5} />
    </div>
  );
}

export default DigitSelect;
