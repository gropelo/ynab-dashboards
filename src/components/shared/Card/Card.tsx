import React from 'react';
import { Card as StyledCard, CardItem } from './styled';

interface IProps {
  label: string;
  amount: number;
}

export const Card = ({ label, amount } : IProps) => (
  <StyledCard>
    <CardItem>{label}</CardItem>
    <CardItem>{amount.toFixed(2)}</CardItem>
  </StyledCard>
);