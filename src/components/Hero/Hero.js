import React from 'react';

import { Section, SectionText, SectionTitle, SectionJob } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Span } from './HeroStyles';
import Typewriter from 'typewriter-effect'

const Hero = (props) => (
    // Accept 2 props
    <Section row nopadding> 
      <LeftSection>
        <SectionTitle main center>
          Hello, I'm <Span>Paolo</Span>. 
        </SectionTitle> 
        <SectionJob style={{ color: 'skyblue'}}>
          Software Engineer, 
          <br></br> Backend Developer,
          <br></br> QA Engineer
        </SectionJob>
        <SectionText>
          <Typewriter 
            options={{
              strings: [
                'I am eager to learn new knowledge!',
                'I love coding!',
                'I like creating new things!'
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
              cursor: '<',
              delay: 100,
            }}
            />
        </SectionText>
        {/* <Button onClick={props.handleClick}>Resume</Button> */}
      </LeftSection>
    </Section>
);

export default Hero;