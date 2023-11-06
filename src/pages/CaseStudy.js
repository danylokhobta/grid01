import React from 'react';
import './CaseStudy.sass';
import FullScreenImg from '../components/FullScreenImg';
import Headline from '../components/Headline';
import Reflection from '../components/Reflection';
import filler600 from '../media/filler600.png';
import filler800 from '../media/filler800.png';
import fillersquare from '../media/fillersquare.png';

function CaseStudy() {
  return (
    <div className="CaseStudy">
      <FullScreenImg src={filler600} height={'600px'}/>
      <Headline
        title={'Headline'}
        img={fillersquare}
        content={'The current line up of listening exercises ramp up the difficulty very quickly. As seen in the digram below, the jump expects a learner to move from listening and tapping to listening and writing. For learners, this increase causes frustration (and eventually temptation to skip these exercises).'}
      />
      <Reflection
        title={'How might we ensure learners are properly prepared for harder challenges?'}
        content={''}
      />
      <FullScreenImg src={filler800} height={'800px'}/>
      <Headline
        title={'Headline'}
        img={fillersquare}
        content={'The current line up of listening exercises ramp up the difficulty very quickly. As seen in the digram below, the jump expects a learner to move from listening and tapping to listening and writing. For learners, this increase causes frustration (and eventually temptation to skip these exercises).'}
      />
      <Headline
        contentToRight={true}
        title={'Headline'}
        img={fillersquare}
        content={'The current line up of listening exercises ramp up the difficulty very quickly. As seen in the digram below, the jump expects a learner to move from listening and tapping to listening and writing. For learners, this increase causes frustration (and eventually temptation to skip these exercises).'}
      />
      <Reflection
        title={'Process'}
        content={''}
      />
      <Headline
        title={'Headline'}
        img={fillersquare}
        content={'The current line up of listening exercises ramp up the difficulty very quickly. As seen in the digram below, the jump expects a learner to move from listening and tapping to listening and writing. For learners, this increase causes frustration (and eventually temptation to skip these exercises).'}
      />
      <Headline
        contentToRight={true}
        title={'Headline'}
        img={fillersquare}
        content={'The current line up of listening exercises ramp up the difficulty very quickly. As seen in the digram below, the jump expects a learner to move from listening and tapping to listening and writing. For learners, this increase causes frustration (and eventually temptation to skip these exercises).'}
      />
    </div>
  );
}

export default CaseStudy;
