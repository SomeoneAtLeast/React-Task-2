import React from 'react';

type SelectProps = {
  func?: any;
  options: string[];
  name: string;
  className: string;
};

const Select: React.FC<SelectProps> = ({ name, options, func, className }) => {
  return (
    <select className={className} name={name} onChange={e => func(e)}>
      {options.map(option => {
        return <option key={option}>{option}</option>;
      })}
    </select>
  );
};

export default Select;
