import React, { useState } from 'react';

const Select = ({ shape }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Determine the shape class based on the prop
  const shapeClass = shape === 'circle'
    ? 'rounded-full'
    : shape === 'rounded'
    ? 'rounded-lg'
    : 'rounded-none'
    

  return (
    <div className="flex w-14">
      <select
        className={`
            
          appearance-none
          bg-black
          text-white
          px-4
          py-2
          border
          border-white
          focus:outline-none
          text-center
          cursor-pointer
          w-10
          ml-3
          bg-no-repeat
          ${shapeClass}
        `}
        style={{
          backgroundImage: selectedOption === '' 
            ? `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6" /></svg>')`
            : 'none', // Hide the arrow when an option is selected
          backgroundPosition: 'right 0.2rem center',
          backgroundSize: '2rem',
        }}
        value={selectedOption}
        onChange={handleChange}
      >
        <option value=""></option>
        <option value="E1">E1</option>
        <option value="E2">E2</option>
        <option value="E3">E3</option>
      </select>
    </div>
  );
};

export default Select;
