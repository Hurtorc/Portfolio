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
            <ul class="flex text-4xl justify-between">
              <li className="mr-6">
                <a class="" href="#projects">Projects</a>
              </li>
              <li className="mr-6 space-x-5">
                <a className="" href="#about">About Me</a>
              </li>
              <li className="mr-6 space-x-5">
                <a className='' href="#contact">Contact Me</a>
              </li>
            </ul>
            <div style={{ width: 800, height: 5 }} />
          </FrameHexagon>
    </ArwesThemeProvider>
  );
};

export default NavBar;
