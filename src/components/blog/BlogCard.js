import React from 'react';
import styled from 'styled-components';
import { Container, Typography } from '../atoms';

const Card = styled.div`
  height: 125px;
  width: 100%;
  display: flex;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, .1);
  @media screen and (min-width: 1000px) {
    min-height: 225px;
    width: 800px;
  }
  @media screen and (min-width: 750px) {
    min-height: 200px;
  }
`;

const CardImage = styled.div`
  flex: 1;
  min-width: 125px;
  background-image: url('${p => p.image}');
  background-position: center;
  background-size: cover;
  @media screen and (min-width: 750px) {
    min-height: 200px;
  }
  `;

const CardInfo = styled.div`
  flex: 2;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 1000px) {
    padding: 25px;
  }
`;


export const BlogCard = ({ image, createdAt, title, subtitle }) => (
  <Card>
    <CardImage image={image} />
    <CardInfo>
      <Container padding="0">
        <Typography size="20px" weight="900">{title.toUpperCase()}</Typography>
        <Typography size="xs">{subtitle}</Typography>
      </Container>
      <Typography size="xs">{createdAt.toUpperCase()}</Typography>
    </CardInfo>
  </Card>
)