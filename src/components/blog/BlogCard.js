import React from 'react';
import styled from 'styled-components';
import { Container, Typography } from '../atoms';

const Card = styled.div`
  min-height: 110px;
  width: 100%;
  display: flex;
  border-radius: 20px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, .1);
`;

const CardImage = styled.div`
  flex: 1;
  min-width: 115px;
  border-radius: 20px 0 0 20px;
  background-image: url('${p => p.image}');
  background-position: center;
  background-size: cover;
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
        <Typography size="md" weight="900">{subtitle.toUpperCase()}</Typography>
        <Typography>{title.toUpperCase()}</Typography>
      </Container>
      <Typography size="xs">{createdAt.toUpperCase()}</Typography>
    </CardInfo>
  </Card>
)