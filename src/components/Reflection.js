import React from 'react';

import './Reflection.css';

function Reflection({title, content}) {
  return (
    <section className='reflection'>
      <div className='text'>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  );
}

export default Reflection;
