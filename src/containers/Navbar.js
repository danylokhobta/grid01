import React, { useState } from 'react';
import './Navbar.sass';

function Navbar({ onSectionChange }) {
  const [activeButton, setActiveButton] = useState('work');

  const handleButtonClick = (section) => {
    setActiveButton(section);
    onSectionChange(section);
  };

  return (
    <nav>
      <div className="Navbar">
        <button className="logo">
          Elisabeth
        </button>
        <button className={`work ${activeButton === 'work' ? 'active' : ''}`} onClick={() => handleButtonClick('work')}>
          Work
        </button>
        <button className={`about ${activeButton === 'about' ? 'active' : ''}`} onClick={() => handleButtonClick('about')}>
          About
        </button>
        <button className={`caseStudy ${activeButton === 'caseStudy' ? 'active' : ''}`} onClick={() => handleButtonClick('caseStudy')}>
          Case Study
        </button>
      </div>
    </nav>
  );
}

export default Navbar;