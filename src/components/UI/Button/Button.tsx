import React from 'react';
import './Button.scss';

const Button: React.FC = ({ func }) => {
  const classNames = 'btn';

  return <button className={classNames} onClick={func}></button>;
};

export default Button;
