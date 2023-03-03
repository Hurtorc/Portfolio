import React from 'react';
import { ArwesThemeProvider, StylesBaseline, Blockquote, Text } from '@arwes/core';
import { Animator } from '@arwes/animation';



const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';

const AboutText = ({ palette }) => (
  <Blockquote palette={palette}>
    <Text>
        <ul>
            <ul className="text-lg">
                <a href='https://github.com/Hurtorc'>Github</a>
                <p>Email: <a href='mailto:anire88@gmail.com'>anire88@gmail.com</a></p>
            </ul>
        </ul>
    </Text>
  </Blockquote>
);

function About() {
  return (
    <ArwesThemeProvider>
      <StylesBaseline styles={{
        body: { fontFamily: FONT_FAMILY_ROOT }
      }} />
      <Animator animator={{ animate: false }}>
        <AboutText />
      </Animator>
    </ArwesThemeProvider>
  );
};

export default About;