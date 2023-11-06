import React from 'react';
import './Arrow.css';
import arrow from '../media/arrow.svg';

function Arrow({url}){
  return(
    <a href={url} class='arrow' target='_blank'><img  src={arrow} alt='arrow' /></a>
  );
}

export default Arrow;