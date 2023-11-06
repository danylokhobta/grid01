import React from 'react';

import Marquee from "react-fast-marquee";
import './Footer.sass';

function Footer() {
  return (
    <footer className='Footer'>
      <span><p>My projects</p></span>
      <Marquee speed='20'>
        <p>First Project • Second Project • Third Project • Fourth Project •First Project • Second Project • Third Project • Fourth Project</p>
      </Marquee>
    </footer>
  );
}

export default Footer;