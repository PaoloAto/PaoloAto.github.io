import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact Number</LinkTitle>
          <LinkItem > +886-971-884-305</LinkItem>
        </LinkColumn>
        {/* <LinkColumn>
          <LinkTitle>Philippines Contact Number</LinkTitle>
          <LinkItem > +63-917-791-1218</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:atopaolo@gmail.com">
            atopaolo@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          {/* <Slogan>Paolo Ato © 2022 </Slogan> */}
        </CompanyContainer>
        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
