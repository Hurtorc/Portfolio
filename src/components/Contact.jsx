import React from 'react';
import { ArwesThemeProvider, StylesBaseline, Text } from '@arwes/core';


const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';

function Contact () {
  return (
  <div data-augmented-ui="
  tl-2-clip-x t-clip-x tr-2-clip-x r-clip-y br-2-clip-y b-clip-x bl-2-clip-y l-clip-y both
" class="styleme">
    <ArwesThemeProvider>
      <StylesBaseline styles={{
        body: { fontFamily: FONT_FAMILY_ROOT }
      }} />
      <Text animator={{ animate: false }}>
        Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit,
        sed do eiusmod tempor <i>incididunt <b>ut labore et dolore
        magna</b> aliqua</i>. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco <a href='#'>laboris nisi ut aliquip</a> ex
        ea commodo consequat.
      </Text>
    </ArwesThemeProvider>
    </div>
  );
}

export default Contact;
