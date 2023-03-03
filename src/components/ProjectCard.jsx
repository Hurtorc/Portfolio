import React, {useRef, useState} from 'react';
import { useInViewport } from 'react-in-viewport';
import { ArwesThemeProvider, StylesBaseline, Card, Button, Text,} from '@arwes/core';
import { AnimatorGeneralProvider,} from '@arwes/animation';

const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';

const globalStyles = { body: { fontFamily: FONT_FAMILY_ROOT } };
const animatorGeneral = { duration: { enter: 200, exit: 200, stagger: 30 } };




function ProjectCard(props) {
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
      <StylesBaseline styles={globalStyles} />
        <AnimatorGeneralProvider animator={animatorGeneral}>
          <Card
            animator={{ activate }}
            image={{
              src: props.img,
              alt: 'A Project Stock Image'
            }}
            title= {props.title}
            options={
              <Button palette='secondary'>
                <Text><a href={props.github}>Github</a></Text>
              </Button>
            }
            landscape
            hover
            style={{ maxWidth: 700 }}
            className='p-1'
          >
            <div ref={textRef} >
            <Text>
              {props.description}
            </Text>
            </div>
          </Card>
        </AnimatorGeneralProvider>
    </ArwesThemeProvider>
  );
};

export default ProjectCard;