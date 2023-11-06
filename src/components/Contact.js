import React from 'react';
import Arrow from './Arrow';

import './Contact.sass';

function Contact() {
  return(
    <div className='Contact'>
      <section>
        <h2 className='item-contact'>hi@contact-me.com</h2>
        <Arrow url='mailto:hi@contact-me.com' />
      </section>
      <section>
        <h2 className='item-contact'>LinkedIn</h2>
        <Arrow url='https://www.linkedin.com/' />
      </section>
    </div>
  )
}

export default Contact;