import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Bar = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  padding: 40px 50px;
  font-family: "Roboto", sans-serif;
  z-index: 1;
  width: 100%;
  text-decoration: none;
  a {
    font-size: 15px;
    font-weight: 300;
    color: ${p => p.light ? "white" : "black"};
    margin-right: 40px;
  }
`

export const NavBar = ({ light }) => {
  return (
    <Bar light={light}>
      <Link to="/">HOME</Link>
      <Link to="/blog">BLOG</Link>
      <Link to="/analog">ANALOG</Link>
    </Bar>
  )
}