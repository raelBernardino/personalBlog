import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Button } from '../atoms'
import { Link } from 'gatsby';

const Banner = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${p => p.url}');
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  height: 125px;
  position: relative;
  @media screen and (min-width: 750px) {
    max-height: 575px;
    min-height: 425px;
    box-sizing: border-box;
  }
`;

const BannerOverlay = styled.div`
  @media screen and (min-width: 750px) {
    padding: 36px;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, .33);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlogBanner = ({ url, posts }) => {
  return (
    <Container padding="0">
      <Banner url={url} >
        <BannerOverlay>
          <BannerText>
            <Typography color="white" weight="800" size="xxl">{posts[0].node.title.toUpperCase()}</Typography>
            <Typography color="white" weight="300" size="xl">{posts[0].node.subtitle.toUpperCase()}</Typography>
          </BannerText>
          <Link to={`/blog/${posts[0].node.slug}`}>
            <Button width="175px" height="64px" fontSize="15px">READ</Button>
          </Link>
        </BannerOverlay>
      </Banner>
    </Container>
  )
}