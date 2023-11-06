import React from 'react';
import Arrow from './Arrow';

import './PortfolioItem.css';

function PortfolioItem({year, title, img, url}) {
  return(
      <section className='item-portfolio'>
        <h4>{year}</h4>
        <h2>{title}</h2>
        <img className='img-p' src={`${img}`} alt='filler' />
        <Arrow url={url} />
      </section>
  )
}

export default PortfolioItem;