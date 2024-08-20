import React, { useState } from 'react';
import Image from 'next/image';

export default function PriorityMenu({}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>('Priority');

  const options = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value:string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="pl-[3px] pr-[7px] items-center flex gap-[3px] rounded-[4px] bg-white/20 cursor-pointer hover:bg-white/40 transition relative" onClick={handleToggle}>
      <Image alt="" height={16} width={16} src={"./flag.svg"} />
      
      <div className="text-[12px] leading-[22px]">
        {selectedValue}
        {isOpen && (

          <ul className="absolute pr-[6px] top-full left-0 mt-1 bg-gradient-to-b from-white/30 from-2% to-white/40 backdrop-blur-3xl rounded-[4px] shadow-md ">
            {options.map((option) => (
              <li
                key={option.value}
                className="pl-3 py-1 flex items-start justify-start text-[12px] leading-[22px] hover:bg-gray-100 "
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
     
    </div>
  );
}

