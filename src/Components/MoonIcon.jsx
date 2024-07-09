import React from 'react';
import useDarkMode from '../Hooks/DarkMode';

const MoonIcon = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? 'rgb(241 245 249)' : 'rgb(30 41 59)'}
      className='size-10 fixed top-14 right-24 cursor-pointer'{...isDarkMode ? 'dark' : ''} onClick={toggleDarkMode}
      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </svg>  
  );
};

export default MoonIcon;
