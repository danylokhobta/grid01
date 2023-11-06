import React from 'react';
import './About.sass';
import img from '../media/fillersquare.png';

function About() {
  return (
    <div className="About">
        <div className='content'>
          <div className='mainblock'>
            <h2>About Me</h2>
            <p>Some description about me goes here. Some description about me goes here.Some description about me goes here.Some description about me goes here.Some description about me goes here.</p>
          </div>
          <div className='subblock'>
            <div className='subsubblock'>
              <p><b>Things I enjoy</b></p>
              <p>Rainy days, pizza parties, and design</p>
            </div>
            <div className='subsubblock'>
              <p><b>My current obession</b></p>
              <p>Endlessly scrolling on TikTok</p>
            </div>
          </div>
        </div>
        <div className='img-block'>
          <img src={img} alt='Headline' />
        </div>
    </div>
  );
}

export default About;