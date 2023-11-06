import React from 'react';

import './FullScreenImg.css';

function FullScreenImg({src, height}) {
  const imgStyle = {
    backgroundImage: `url(${src})`,
    height: `${height}`
  };
  return (
    <img src={`${src}`} alt='fullscreen-img' />
  );
}

export default FullScreenImg;
