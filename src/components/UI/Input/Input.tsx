import React from 'react';

type InputProps = {
  children: string;
  func?: any;
  className: string;
};

const Input: React.FC<InputProps> = ({ children, className, func }) => {
  return (
    <input
      className={className}
      placeholder={children}
      onChange={e => func(e.target.value)}
    />
  );
};

export default Input;
