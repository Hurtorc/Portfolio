import React from 'react';
import { ArwesThemeProvider, StylesBaseline, Text, FrameLines} from '@arwes/core';

const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';

function Contact () {
  return (
    <ArwesThemeProvider>
      <StylesBaseline styles={{
        body: { fontFamily: FONT_FAMILY_ROOT }
      }} /><FrameLines animator={{ animate: false }} hover>
        <div style={{ width: 50, height: 1 }} />
      
      <Text className=' text-2xl p-2 m-2' animator={{ animate: false }}>
        Hello and welcome to my website!
My name is Adam, and I wear many hats. By day, I am a skilled bartender, crafting delicious cocktails and creating memorable experiences for my patrons. 
But in my free time, I am also an aspiring programmer, constantly learning and growing in the field.
Aside from my professional pursuits, I have a few passions that keep me going. Food is one of my greatest loves - whether I'm trying out a new recipe or sampling a dish from a new restaurant, I always appreciate the artistry and creativity that goes into a great meal.
And when I'm not indulging my taste buds, you'll often find me immersed in the world of video games. From epic RPGs to heart-pumping shooters, I love exploring new virtual worlds and experiencing new adventures.
So whether you're here to learn about my experiences behind the bar or to follow along on my journey as a programmer, I hope you'll find something here to pique your interest. Thanks for stopping by!
      </Text>
      </FrameLines>
    </ArwesThemeProvider>
  );
}

export default Contact;
