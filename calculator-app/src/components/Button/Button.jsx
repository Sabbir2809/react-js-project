import React from 'react';

const Button = ({ value, onClick, isAccent }) => {
  const buttonClassName = `button${isAccent ? ' accent' : ''}`;

  return (
    <button className={buttonClassName} onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default Button;
