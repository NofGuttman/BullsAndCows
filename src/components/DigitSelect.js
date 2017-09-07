import React from 'react';
import Digit from './Digit';

const DigitSelect = ({digitNumber}) => {
  return(
    <div className="select">
      <h1>Select:</h1>
      <Digit digitNumber={digitNumber} value={0} style="red digit" />
      <Digit digitNumber={digitNumber} value={1} style="yellow digit" />
      <Digit digitNumber={digitNumber} value={2} style="green digit" />
      <Digit digitNumber={digitNumber} value={3} style="blue digit" />
      <Digit digitNumber={digitNumber} value={4} style="purple digit" />
      <Digit digitNumber={digitNumber} value={5} style="orange digit" />
    </div>
  );
}

export default DigitSelect;