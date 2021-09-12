import React from 'react';

interface SelectProps {
  func: (e: { target: { name: string; value: string } }) => void;
  options: string[];
  name: string;
  className: string;
  value: string;
}

const Select: React.FC<SelectProps> = ({
  name,
  options,
  func,
  value,
  className,
}) => {
  return (
    <select
      value={value}
      className={className}
      name={name}
      onChange={e => func(e)}
    >
      {options.map(option => {
        return <option key={option}>{option}</option>;
      })}
    </select>
  );
};

export default Select;
