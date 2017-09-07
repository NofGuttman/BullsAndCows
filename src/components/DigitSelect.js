import React from 'react';
import Digit from './Digit';

const DigitSelect = () => {
  return(
    <div>
      <h1>Dude</h1>
      <Digit value={0} style={"red digit"} />
      <Digit value={1} style={"yellow digit"} />
      <Digit value={2} style={"green digit"} />
      <Digit value={3} style={"blue digit"} />
      <Digit value={4} style={"purple digit"} />
      <Digit value={5} style={"orange digit"} />
    </div>
  );
}

export default DigitSelect;