import React from 'react';
import './Button.scss';

type ButtonProps = {
  func: any;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, func }) => {
  const classNames = 'btn';

  return (
    <button className={classNames} onClick={func}>
      {children}
    </button>
  );
};

export default Button;
