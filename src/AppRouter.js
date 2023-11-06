import React, { useState } from 'react';
import './AppRouter.sass';
import Work from './pages/Work';
import About from './pages/About';
import CaseStudy from './pages/CaseStudy';
import Navbar from './containers/Navbar';

function AppRouter() {
  const [activeSection, setActiveSection] = useState('work');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="AppRouter">
      <Navbar onSectionChange={handleSectionChange} />
      <div className="tab-content">
        <div className={`tab-pane ${activeSection === 'work' ? 'active' : ''}`}>
          {activeSection === 'work' && <Work />}
        </div>
        <div className={`tab-pane ${activeSection === 'about' ? 'active' : ''}`}>
          {activeSection === 'about' && <About />}
        </div>
        <div className={`tab-pane ${activeSection === 'caseStudy' ? 'active' : ''}`}>
          {activeSection === 'caseStudy' && <CaseStudy />}
        </div>
      </div>
    </div>
  );
}

export default AppRouter;