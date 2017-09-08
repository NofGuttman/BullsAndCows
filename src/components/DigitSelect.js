import React from 'react';
import Digit from './Digit';

const DigitSelect = ({digitNumber, clickHandler}) => {
  return(
    <div className="select">
      <Digit digitNumber={digitNumber} clickHandler={clickHandler} value={0} style="red digit" />
      <Digit digitNumber={digitNumber} clickHandler={clickHandler} value={1} style="yellow digit" />
      <Digit digitNumber={digitNumber} clickHandler={clickHandler} value={2} style="green digit" />
      <Digit digitNumber={digitNumber} clickHandler={clickHandler} value={3} style="blue digit" />
      <Digit digitNumber={digitNumber} clickHandler={clickHandler} value={4} style="purple digit" />
      <Digit digitNumber={digitNumber} clickHandler={clickHandler} value={5} style="orange digit" />
    </div>
  );
}

export default DigitSelect;