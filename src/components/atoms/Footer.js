import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Container, Typography } from './';
import { FaFacebookSquare, FaInstagram, FaGithub } from 'react-icons/fa'

const FooterContainer = styled(Container)`
  background-color: #333;
  min-height: 15vh;
`;

const IconContainer = styled.div`
  flex-direction: row;
  > * {
    padding-right: 8px;
    rgba(250, 250, 250, .5);
    color: white;
    &:hover {
      rgba(250, 250, 250, 1);
    }
  }
  font-size: 16px;
  padding: 15px 0 0 0;

`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Typography color="white" size="md" weight="900">RAEL</Typography>
      <Typography color="white" size="md" weight="900">BERNARDINO</Typography>
      <Typography color="white" size="xs" weight="300">BERNARDINO1207@GMAIL.COM</Typography>
      <IconContainer>
        <a href="https://instagram.com/rvilz">
          <FaInstagram />
        </a>
        <a href="https://facebook.com/rael.bernardino">
          <FaFacebookSquare />
        </a>
        <a href="https://github.com/raelBernardino">
          <FaGithub />
        </a >
      </IconContainer >
    </FooterContainer >
  )
}