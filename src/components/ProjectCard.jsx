import React from 'react';
import { ArwesThemeProvider, StylesBaseline, Card, Button, Text,} from '@arwes/core';
import { AnimatorGeneralProvider,} from '@arwes/animation';

const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';

const globalStyles = { body: { fontFamily: FONT_FAMILY_ROOT } };
const animatorGeneral = { duration: { enter: 200, exit: 200, stagger: 30 } };


function ProjectCard(props) {
  const [activate,] = React.useState(true);
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
            style={{ maxWidth: 800 }}
            className='p-1'
          >
            <Text>
              {props.description}
            </Text>
          </Card>
        </AnimatorGeneralProvider>
    </ArwesThemeProvider>
  );
};

export default ProjectCard;