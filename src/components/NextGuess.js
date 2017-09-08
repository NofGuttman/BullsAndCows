import React from 'react';
import Digit from './Digit';
import colorList from '../colorList';

const NextGuess = ({code}) => {
  const visualCode = code.map((digit) => {
    return(<Digit value={digit} />);
  });
  
  return(
    <div id="next-guess">
      {visualCode}
    </div>
  );
}

export default NextGuess;