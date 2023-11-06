import React from 'react';
import './Tab.css';

function Tab(props){
  return(
    <div className='tab'>
      {props.children}
    </div>
  )
}

export default Tab;