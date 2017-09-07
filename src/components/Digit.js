import React from 'react';

const Digit = ({value, style, digitNumber}) => {
  return(
    <div
      className={style}
      value={value}>{digitNumber}
    </div>
  );
}

export default Digit;