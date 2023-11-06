import React from 'react';
import './Header.sass';

function Header(){
  return(
    <header className='Header' id='Header'>
      <h1>
        <span>01</span>
        Grid
      </h1>
      <h4>
        <a href='https://www.figma.com/@stokes' target='_blank'>designed by Jeremy Stocks</a>
      </h4>
    </header>
  );
}

export default Header;