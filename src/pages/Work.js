import React from 'react';
import PortfolioItem from '../components/PortfolioItem';
import './Work.sass';
import filler from '../media/filler.png';

function Work() {
  return(
    <div className="Work taffy-borders">
      <section className='greeting'>
        <h1>
          C’mon in,<br />
          <span>I’m <u>Elisabeth</u></span>
        </h1>
        <p>
          Use this section to describe your mission / perspective on design. Talk about who you are, what you do and what you love for example.
        </p>
      </section>
      <PortfolioItem
        year={'2023'}
        title={'Brief Desctiption of Case Study'}
        img={filler}
      />
      <PortfolioItem
        year={'2022'}
        title={'Building a reusable design system'}
        img={filler}
      />
      <PortfolioItem
        year={'2023'}
        title={'Creating a new way to exress yourself'}
        img={filler}
      />
      <PortfolioItem
        year={'2023'}
        title={'Building a way a better autocorrect'}
        img={filler}
      />
    </div>
  )
}

export default Work;