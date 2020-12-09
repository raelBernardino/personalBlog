import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Image } from '../atoms'

const Overlay = styled(Container)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  position: absolute;
  border-radius: 0 0 30px 30px;
`;

const BlogImage = styled(Image)`
  border-radius: 0 0 30px 30px;
`

export const BlogHeader = ({
  image,
  title,
  subtitle,
  author,
  createdAt }) => (
    <BlogImage src={image.fluid.src} width="100%" height="50vh" size="cover">
      <Overlay>
        <Typography color="white" weight="300" size="xs">
          WRITTEN BY
      </Typography>
        <Typography color="white" weight="300" size="xs">
          {author.toUpperCase()}
        </Typography>
        <Container padding="0" justifyContent="flex-end">
          <Typography color="white" weight="300" size="xs">
            {createdAt.toUpperCase()}
          </Typography>
          <Typography color="white" weight="900" size="xl">
            {title.toUpperCase()}
          </Typography>
          <Typography color="white" weight="300" size="md">
            {subTitle.toUpperCase()}
          </Typography>
        </Container>
      </Overlay>
    </BlogImage>
  )