import Link from 'next/link'; //Link different pages
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white", marginBottom: '20px' }}>
          <DiCssdeck size="3rem" /> <Span></Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>  
      <li>
        <Link href="#tech">
          <NavLink>Skills</NavLink>
        </Link>
      </li>     
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>  
      <li>
        {/* <Link href="#resume">
        </Link> */}
        {/* <NavLink href="https://drive.google.com/file/d/1C-z7Bj37pCAawNCiUnS6uKl5LarDvWAg/view?usp=sharing" target="_blank">Resume</NavLink> */}
        <NavLink href="/Resume_Paolo_Ato.pdf" target="_blank">Resume</NavLink>
      </li> 
       
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/PaoloAto" target="_blank" >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/paolo-miguel-ato-518202191/" target="_blank" >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="mailto:atopaolo@gmail.com">
        <AiOutlineMail size="3rem" />
      </SocialIcons> */}
        {/* <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;
