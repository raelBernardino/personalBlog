import React from 'react';
import styled from 'styled-components';

const size = {
  xl: "42px",
  lg: "36px",
  md: "24px",
  sm: "16px",
  xs: "12px"
}

export const typographyRef = {
  "paragraph": "p",
}

const StyledTypography = styled(({ tag, children, ...props }) => React.createElement(tag, props, children))`
  font-family: "Roboto", sans-serif;
  font-weight: ${p => p.weight || "300"};
  font-size: ${p => size[p.size] || size["sm"]};
  color: ${p => p.color || "black"};
  line-height: 1.25;
  padding: ${p => p.padding};
`

export const Typography = ({ children, tag, weight, size, color, padding }) => (
  <StyledTypography
    tag={tag || "span"}
    weight={weight}
    size={size}
    color={color}
    padding={padding}
  >
    {children}
  </StyledTypography>
)