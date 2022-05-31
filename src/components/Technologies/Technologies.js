import React from 'react';
import { DiFirebase, DiReact, DiZend, DiCode } from 'react-icons/di';
import { ImStack, ImDatabase } from "react-icons/im";
import { VscDebugConsole } from "react-icons/vsc";
import { FaUserCheck } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    {/* <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText> */}
    <List>
      <ListItem>
        <picture>
          <DiCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Python, Java, C, Javascript, Swift
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <ImStack size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web Development</ListTitle>
          <ListParagraph>
            Node.js, Django, React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            MySQL, MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <VscDebugConsole size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Quality Assurance</ListTitle>
          <ListParagraph>
            Selenium, Robot Framework, Cypress
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <picture>
          <GiArtificialIntelligence size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            Pytorch, Numpy, Pandas, Scikit-learn 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaUserCheck size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Figma, InVision
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
