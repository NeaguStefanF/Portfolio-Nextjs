import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? 'text-white border-solid border-b-2 border-blue-500'
    : 'text-[#ADB7BE]';
  return (
    <button
      className={`mr-3 font-semibold ${buttonClasses}`}
      onClick={selectTab}
    >
      {children}
    </button>
  );
};

export default TabButton;
