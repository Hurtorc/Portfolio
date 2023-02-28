import React from 'react';
import { ArwesThemeProvider, StylesBaseline, FrameHexagon, Text } from '@arwes/core';

function NavBar() {
  return (
    <ArwesThemeProvider>
        <StylesBaseline />
          <FrameHexagon
            animator={{ animate: false }}
            hover
            inverted
          >
            <a href='' className='flex absolute inset-y-0 left-0 text-3xl'>
            <Text>Home</Text></a>
            <a href=''className='flex absolute inset-y-0 right-0 text-3xl'>
            <Text>About Me</Text></a>
            <a href=''className='flex absolute inset-y-0 right-0 text-3xl'>
            <Text>Contact Me!</Text></a>
            <div style={{ width: 500, height: 50 }} />
          </FrameHexagon>
    </ArwesThemeProvider>
  );
};

export default NavBar;
