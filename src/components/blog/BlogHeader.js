import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Image } from '../atoms'

const Overlay = styled(Container)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  position: absolute;
`;

export const BlogHeader = ({
  image,
  title,
  subtitle,
  author,
  createdAt }) => (
    <Image src={image.fluid.src} width="100%" height="50vh" size="cover">
      <Overlay>
        <Typography color="white" weight="200" size="xs">
          WRITTEN BY
      </Typography>
        <Typography color="white" weight="200" size="xs">
          {author.toUpperCase()}
        </Typography>
        <Container padding="0" justifyContent="flex-end">
          <Typography color="white" weight="200" size="xs">
            {createdAt.toUpperCase()}
          </Typography>
          <Typography color="white" weight="900" size="xl">
            {subtitle.toUpperCase()}
          </Typography>
          <Typography color="white" weight="200" size="md">
            {title.toUpperCase()}
          </Typography>
        </Container>
      </Overlay>
    </Image>
  )