import React from 'react';
import { ArwesThemeProvider, StylesBaseline, Card, Button, Text,} from '@arwes/core';
import { AnimatorGeneralProvider,} from '@arwes/animation';

const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
const IMAGE_URL = '/assets/images/wallpaper.jpg';

const globalStyles = { body: { fontFamily: FONT_FAMILY_ROOT } };
const animatorGeneral = { duration: { enter: 200, exit: 200, stagger: 30 } };


function ProjectOne() {
  const [activate, setActivate] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setActivate(!activate), 2000);
    return () => clearTimeout(timeout);
  }, [activate]);

  return (
    <ArwesThemeProvider>
      <StylesBaseline styles={globalStyles} />
        <AnimatorGeneralProvider animator={animatorGeneral}>
          <Card
            animator={{ activate }}
            image={{
              src: IMAGE_URL,
              alt: 'A nebula'
            }}
            title='Nebula'
            options={
              <Button palette='secondary'>
                <Text>Learn More</Text>
              </Button>
            }
            landscape
            hover
            style={{ maxWidth: 800 }}
          >
            <Text>
              A nebula is an interstellar cloud of dust, hydrogen,
              helium and other ionized gases. Originally, the term
              was used to describe any diffused astronomical object,
              including galaxies beyond the Milky Way.
            </Text>
          </Card>
        </AnimatorGeneralProvider>
    </ArwesThemeProvider>
  );
};

export default ProjectOne;