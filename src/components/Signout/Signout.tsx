import React from 'react';
import { invalidate } from 'utils/auth';
import { SideNavLink } from './styles';

export const Signout = () => (
  <SideNavLink onClick={() => invalidate()}>Signout</SideNavLink>
);