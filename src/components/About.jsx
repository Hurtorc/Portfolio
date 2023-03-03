import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { ArwesThemeProvider, StylesBaseline, Text, FrameLines} from '@arwes/core';

const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';


const duration = { enter: 1000, exit: 1000 };

function Contact () {
  const [activate, setActivate] = React.useState(true);
  const textRef = useRef(null);

  const { inViewport } = useInViewport(textRef, { threshold: 0.5 });

  React.useEffect(() => {
    if (inViewport) {
      setActivate(true);
    } else {
      setActivate(false);
    }
  }, [inViewport]);

  return (
    <ArwesThemeProvider>
      <StylesBaseline styles={{
        body: { fontFamily: FONT_FAMILY_ROOT }
      }} />
      <div ref={textRef}>
        <Text animator={{ duration, activate }}>
          My name is Adam Latham, and I wear many hats. By day, I am a skilled bartender, crafting delicious cocktails and creating memorable experiences for my patrons. But in my free time, I am also an aspiring programmer, constantly learning and growing in the field.
Aside from my professional pursuits, I have a few passions that keep me going. Food is one of my greatest loves - whether I'm trying out a new recipe or sampling a dish from a new restaurant, I always appreciate the artistry and creativity that goes into a great meal.
And when I'm not indulging my taste buds, you'll often find me immersed in the world of video games. From epic RPGs to heart-pumping shooters, I love exploring new virtual worlds and experiencing new adventures.
So whether you're here to learn about my experiences behind the bar or to follow along on my journey as a programmer, I hope you'll find something here to pique your interest. Thanks for stopping by!
        </Text>
      </div>
    </ArwesThemeProvider>
  );
}

export default Contact;
