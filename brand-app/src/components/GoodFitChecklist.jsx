"use client";
import React, { useState } from 'react';
import { FiLock, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

const GoodFitChecklist = () => {
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
  });

  const handleCheck = (item) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const isAllChecked = checkedCount === 3;

  const getRemainingText = () => {
    if (checkedCount === 3) return "You're ready!";
    return `${3 - checkedCount} more to go.`;
  };

  const checklistData = [
    {
      id: 'item1',
      text: "You've got a team who can execute, but no one to steer the wheel.",
      number: '01',
      color: 'text-violet-400',
      bgColor: 'bg-violet-400',
      borderColor: 'border-violet-400',
      lightBgColor: 'bg-violet-50',
    },
    {
      id: 'item2',
      text: "You're past the same old, boring content.",
      number: '02',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400',
      borderColor: 'border-orange-400',
      lightBgColor: 'bg-orange-50',
    },
    {
      id: 'item3',
      text: "You want an ongoing growth partner, not a quick brand refresh.",
      number: '03',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400',
      borderColor: 'border-orange-400',
      lightBgColor: 'bg-orange-50',
    }
  ];

  return (
    <section className="w-full bg-violet-100 py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
        
        {/* Left Side: Content & Checklist */}
        <div className="flex-1">
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight uppercase font-sans mb-4">
              <span className="text-gray-900">Let's find out if we're</span> <br className="hidden md:block" />
              <span className="text-[#FD5800]">A good fit</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-lg">
              Tick the boxes that sound like you. All three, and we should talk.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {checklistData.map((item) => {
              const isChecked = checkedItems[item.id];
              return (
                <div 
                  key={item.id}
                  onClick={() => handleCheck(item.id)}
                  className={`relative flex items-center p-6 bg-white rounded-2xl shadow-sm cursor-pointer transition-all duration-300 border border-transparent hover:shadow-md ${isChecked ? `border-l-4 ${item.borderColor}` : 'border-l-4 border-l-transparent'}`}
                >
                  {/* Left subtle highlight if checked is handled by border-l */}
                  
                  {/* Checkbox */}
                  <div className={`w-8 h-8 flex-shrink-0 rounded flex items-center justify-center border-2 transition-colors duration-300 mr-6 ${isChecked ? `${item.bgColor} border-transparent` : `border-gray-200 ${item.lightBgColor}`}`}>
                    {isChecked && <FiCheck className="text-white text-xl" />}
                  </div>

                  {/* Text */}
                  <p className="flex-1 text-gray-800 text-lg pr-4 font-medium">
                    {item.text}
                  </p>

                  {/* Number */}
                  <span className={`text-3xl font-black ${item.color} opacity-80`}>
                    {item.number}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Progress Card */}
        <div className="w-full md:w-[400px] flex-shrink-0">
          <div className="bg-white rounded-3xl p-8 shadow-sm h-full flex flex-col sticky top-24">
            
            <div className="flex items-baseline mb-6">
              <span className="text-8xl font-black text-gray-900 leading-none">
                {checkedCount}
              </span>
              <span className="text-5xl font-black text-gray-300 ml-2">
                /3
              </span>
            </div>

            {/* Progress Bars */}
            <div className="flex gap-2 mb-6 w-full">
              {[1, 2, 3].map((segment) => (
                <div 
                  key={segment} 
                  className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${segment <= checkedCount ? 'bg-gray-900' : 'bg-gray-200'}`}
                />
              ))}
            </div>

            <p className="text-gray-500 font-medium mb-auto">
              {getRemainingText()}
            </p>

            {/* Button */}
            <button 
              disabled={!isAllChecked}
              className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-lg transition-all duration-300 mt-12
                ${isAllChecked 
                  ? 'bg-gray-900 text-white hover:bg-black shadow-lg hover:shadow-xl transform hover:-translate-y-1' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
            >
              {!isAllChecked && <FiLock className="text-gray-400" />}
              {isAllChecked ? 'Book a Call' : 'Check all 3 to book a call'}
            </button>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default GoodFitChecklist;

