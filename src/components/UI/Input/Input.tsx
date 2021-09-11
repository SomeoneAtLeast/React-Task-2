import React from 'react';

interface InputProps {
  children: string;
  func?: any;
  className: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ children, className, func, name }) => {
  return (
    <input
      className={className}
      name={name}
      placeholder={children}
      onChange={e => func(e)}
    />
  );
};

export default Input;
