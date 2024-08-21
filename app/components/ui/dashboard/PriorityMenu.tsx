import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PriorityMenu({onPrioritySelect} : {onPrioritySelect : (selectedPriority: string) => void}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
    onPrioritySelect(value)
    setIsOpen(false);
  };

  return (
    <div className="pl-[3px] pr-[7px] items-center flex gap-[3px] rounded-[4px] bg-white/20 cursor-pointer hover:bg-white/40 transition relative" onClick={handleToggle}>
      <Image alt="" height={16} width={16} src={"./flag.svg"} />
      
      <div className="text-[12px] leading-[22px]">
        {selectedValue}
        {isOpen && (

          <motion.ul 
            className="absolute  top-full left-0 mt-1 bg-gradient-to-b from-white/15 from-50% to-white/25 backdrop-blur-3xl backdrop-brightness-150 rounded-[4px] shadow-md border border-white/40 "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
                duration: 0.400 ,
                ease: "backOut"
            }}
            >
            {options.map((option) => (
              <li
                key={option.value}
                className="pl-3 py-1 pr-[17px]  flex items-start justify-start text-[12px] leading-[22px] text-white hover:bg-white/50 hover:text-black hover:rounded-[4px] hover:transition duration-200 "
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
     
    </div>
  );
}

