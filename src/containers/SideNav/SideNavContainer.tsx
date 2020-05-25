import React from 'react';
import { Loading, Signout, CategoriesList } from '../../components';
import { SideNav, SideNavTitle, SideNavDivisor } from './styles';

export const SideNavContainer = () => {
  return (
    <SideNav>
      <React.Suspense fallback={<Loading/>}>
        <SideNavTitle>Categories</SideNavTitle>
        <SideNavDivisor />
        <CategoriesList />
        <SideNavDivisor />
        <Signout />
        <SideNavDivisor />
      </React.Suspense>
    </SideNav>  
  );
};