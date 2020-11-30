import React from 'react';
import styled from 'styled-components';
import { Container } from '../atoms'

const Banner = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${p => p.url}');
  border-radius: 25px;
  background-size: cover;
  background-position: center;
`;

export const BlogBanner = ({ url }) => (
  <Container height="125px" padding="0">
    <Banner url={url} />
  </Container>
)