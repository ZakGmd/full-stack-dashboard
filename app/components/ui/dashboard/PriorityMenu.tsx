import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PriorityMenu({onPrioritySelect} : {onPrioritySelect : (selectedPriority: string) => void}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>('Priority');

  const options = [
    { value: 'Low', label: 'Low' , icon: '../flag-low.svg'},
    { value: 'Medium', label: 'Medium' , icon: '../flag-normal.svg' },
    { value: 'High', label: 'High' , icon: '../flag-high.svg'},
    { value: 'Urgent', label: 'Urgent', icon: '../flag-urgent.svg' }
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
    <div className={`pl-[4px] pr-[7px] items-center justify-center ${ selectedValue === "Urgent" ? "bg-[#B13A4145] text-white hover:bg-[#B13A4160] hover:duration-200" : selectedValue === "Medium" ? "bg-[#4466ff45] text-white hover:bg-[#4466FF55] hover:duration-200 " : selectedValue === "High" ? "bg-[#cf940a45] text-white hover:bg-[#CF940A55] hover:duration-100 hover:transition-colors" : "" } transition-colors duration-200 ease-out flex gap-[6px] rounded-[4px] bg-white/20 cursor-pointer hover:bg-white/40  relative`} onClick={handleToggle}>
      <Image alt="" height={12} width={12} src={selectedValue === "Urgent" ? "../flag-urgent.svg" : selectedValue === "High" ? "../flag-high.svg" : selectedValue === "Medium" ? "../flag-normal.svg" : selectedValue === "Low" ? "../flag-low.svg" : "../flag.svg"} /> 
      <div className="text-[12px] leading-[22px]">
        {selectedValue}
        {isOpen && (

          <motion.ul 
            className="absolute  top-full left-0 mt-1 bg-black/50  backdrop-blur-3xl backdrop-brightness-150 rounded-[4px] shadow-md border border-white/15 "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
           
            transition={{ 
                duration: 0.320 ,
                ease: "backOut"
            }}
            >
            {options.map((option) => (
              <li
                key={option.value}
                className="pl-2 py-1 pr-[21px] gap-2 flex r text-[12px] leading-[20px] text-white hover:bg-white/10 hover:text-white hover:rounded-[4px] hover:transition duration-200 "
                onClick={() => handleSelect(option.value)}
              >
                <Image src={option.icon} alt={''} height={9} width={9} />
                <div className=''>{option.label}</div>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
     
    </div>
  );
}

