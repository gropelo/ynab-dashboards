import React from 'react';
import { Card as StyledCard, CardItem, CardTitle, CardSubTitle,CardValue } from './styles';

interface IProps {
  label: string;
  amount: number;
  info?: string;
}

export const Card = ({ label, amount, info } : IProps) => (
  <StyledCard>
    <CardItem>
      <CardTitle>{label}</CardTitle>
      <CardSubTitle>{info}</CardSubTitle>
    </CardItem>
    <CardItem>
      <CardValue>{amount.toFixed(2)}</CardValue>
    </CardItem>
  </StyledCard>
);