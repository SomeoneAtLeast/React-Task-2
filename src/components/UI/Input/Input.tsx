import React from 'react';

interface InputProps {
  children: string;
  func: (e: { target: { name: string; value: string } }) => void;
  className: string;
  name: string;
  value: string;
}

const Input: React.FC<InputProps> = ({
  value,
  children,
  className,
  func,
  name,
}) => {
  return (
    <input
      className={className}
      value={value}
      name={name}
      placeholder={children}
      onChange={e => func(e)}
    />
  );
};

export default Input;
