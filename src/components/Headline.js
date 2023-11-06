import React from 'react';
import './Headline.sass';

function Headline({title, img, content, contentToRight}) {
  return (
    <div className='Headline'>
      <div className={`text ${(contentToRight) ? "to-right" : ""}`}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <div className='img'>
        <img src={`${img}`} alt='headline-img' />
      </div>
    </div>
  );
}

export default Headline;
