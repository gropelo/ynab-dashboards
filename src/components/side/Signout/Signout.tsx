import React from 'react';
import { invalidate } from '../../../utils/auth';
import { SideNavLink } from './styled';

export const Signout = () => (
  <SideNavLink onClick={() => invalidate()}>Signout</SideNavLink>
);