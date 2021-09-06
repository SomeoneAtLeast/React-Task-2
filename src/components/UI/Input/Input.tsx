import React from 'react';

type InputProps = {
  children: string;
  func?: any;
};

const Input: React.FC<InputProps> = ({ children, func }) => {
  return <input placeholder={children} onChange={e => func(e.target.value)} />;
};

export default Input;
