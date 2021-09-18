import React from 'react';
import './Button.scss';

interface ButtonProps {
  func: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, func, disabled }) => {
  let classNames = 'btn';

  if (disabled) classNames += ' btn--disabled';

  return (
    <button className={classNames} onClick={func}>
      {children}
    </button>
  );
};

export default Button;
