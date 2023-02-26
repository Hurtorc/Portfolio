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
            <a href=''><Text>Home</Text></a>
            <a href=''><Text>Projects</Text></a>
            <a href=''><Text>About</Text></a>
            <div style={{ width: 1000, height: 50 }} />
          </FrameHexagon>
    </ArwesThemeProvider>
  );
};

export default NavBar;
