import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  width: ${p => p.width || "124px"};
  height: ${p => p.width || "42px"};
  padding: ${p => p.width};
  background-color: ${p => p.theme === "dark" ? "transparent" : "white"};
  color: ${p => p.theme === "dark" ? "white" : "#333"};
  border: ${p => p.theme === "dark" ? "solid white 1px" : "solid #333 1px"};
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  transition: .3s;
  align-items: center;
  &:hover {
    transition: .3s;
    background-color: ${p => p.theme === "dark" ? "white" : "#333"};
    color: ${p => p.theme === "dark" ? "#333" : "white"};
  }
`


export const Button = ({ children, theme, width, height, padding }) => (
  <ButtonContainer
    theme={theme}
    width={width}
    height={height}
    padding={padding}
  >
    VIEW
  </ButtonContainer>
)