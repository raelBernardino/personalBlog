import React from 'react';
import styled from 'styled-components';
import { Typography } from '../atoms';

const Card = styled.div`
  min-height: 120px;
  width: 100%;
  display: flex;
  border-radius: 20px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, .1);
`;

const CardImage = styled.div`
  flex: 1;
  border-radius: 20px 0 0 20px;
  background-color: #333;
  `;

const CardInfo = styled.div`
  flex: 2;
  border-radius: 0 0 20px 20px;
  box-sizing: border-box;
  padding: 10px;
`;


export const BlogCard = () => (
  <Card>
    <CardImage />
    <CardInfo>
    </CardInfo>
  </Card>
)