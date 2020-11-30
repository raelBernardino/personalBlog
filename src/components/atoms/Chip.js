import React from 'react';
import styled from 'styled-components';
import { Typography } from './'

export const ChipContainer = styled.div`
  padding: 5px 10px;
  background-color: ${p => p.isSelected || "white"};
  border-radius: 30px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, .15);
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Chip = ({ isSelected, label, onClick }) => (
  <ChipContainer isSelected={isSelected} onClick={onClick}>
    <Typography size="xs" weight="900">{label}</Typography>
  </ChipContainer>
)