import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Image } from '../atoms'
import { useWindowDimensions } from '../../hooks'

const Overlay = styled(Container)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  position: absolute;
  border-radius: 0 0 30px 30px;
`;

const BlogImage = styled(Image)`
  border-radius: 0 0 30px 30px;
  @media screen and (min-width: 750px) {
    border-radius: 0;
    height: 65vh;
  }
`

const BlogDesktopHeader = styled(Container)`
  width: 100%;
  padding: 75px 25px 0 25px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 375px;
`;

export const BlogHeader = ({
  image,
  title,
  subtitle,
  author,
  createdAt }) => {
  const { width } = useWindowDimensions()
  return (
    <>
      {width > 749 &&
        <BlogDesktopHeader>
          <Typography weight="900" size="xxl">
            {title.toUpperCase()}
          </Typography>
          <Typography weight="300" size="md">
            {subtitle.toUpperCase()}
          </Typography>
          <Typography weight="300" size="sm" margin="5px 0 15px 0">
            {createdAt.toUpperCase()}
          </Typography>
          <Typography weight="300" size="xs">
            WRITTEN BY
        </Typography>
          <Typography weight="300" size="xs">
            {author.toUpperCase()}
          </Typography>
        </BlogDesktopHeader>
      }
      <BlogImage src={image.fluid.src} width="100%" height="50vh" size="cover">
        {width < 750 &&
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
                {subtitle.toUpperCase()}
              </Typography>
            </Container>
          </Overlay>
        }
      </BlogImage>
    </>
  )
}