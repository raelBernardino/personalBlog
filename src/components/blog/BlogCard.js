import React from 'react';
import styled from 'styled-components';
import { Container, Typography } from '../atoms';

const Card = styled.div`
  min-height: 125px;
  width: 100%;
  display: flex;
  border-radius: 20px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, .1);
  @media screen and (min-width: 750px) {
    min-height: 200px;
  }
  @media screen and (min-width: 1000px) {
    min-height: 225px;
    width: 1125px;
  }
`;

const CardImage = styled.div`
  flex: 1;
  min-width: 125px;
  border-radius: 20px 0 0 20px;
  background-image: url('${p => p.image}');
  background-position: center;
  background-size: cover;
  @media screen and (min-width: 750px) {
    min-height: 200px;
  }
  `;

const CardInfo = styled.div`
  flex: 2;
  border-radius: 0 0 20px 20px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


export const BlogCard = ({ image, createdAt, title, subtitle }) => (
  <Card>
    <CardImage image={image} />
    <CardInfo>
      <Container padding="0">
        <Typography size="md" weight="900">{title.toUpperCase()}</Typography>
        <Typography>{subtitle.toUpperCase()}</Typography>
      </Container>
      <Typography size="xs">{createdAt.toUpperCase()}</Typography>
    </CardInfo>
  </Card>
)