import React from 'react';
import { ArwesThemeProvider, StylesBaseline, FrameHexagon, } from '@arwes/core';
import { AnimatorGeneralProvider,} from '@arwes/animation';

const animatorGeneral = { duration: { enter: 200, exit: 200 } };

function NavBar() {
  const [activate, setActivate] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setActivate(!activate), 2000);
    return () => clearTimeout(timeout);
  }, [activate]);

  return (
    <ArwesThemeProvider>
    
        <StylesBaseline />
        
          <FrameHexagon
            animator={{ animate: false }}
            hover
            inverted
          >
            <div style={{ width: 1000, height: 50 }} />
          </FrameHexagon>
    </ArwesThemeProvider>
  );
};

export default NavBar;
