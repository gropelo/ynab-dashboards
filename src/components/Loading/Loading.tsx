import React from 'react';
import { StyledSpinner } from './styles';

export const Loading = () => (
  <StyledSpinner>
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
);