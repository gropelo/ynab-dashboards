import React from 'react';
import { Loading, Signout, CategoriesList } from '../../components';
import { Center, SideNav, SideNavTitle, SideNavDivisor } from './styles';

export const SideNavContainer = () => {
  return (
    <SideNav>
      <SideNavTitle>Categories</SideNavTitle>
      <SideNavDivisor />
      <React.Suspense fallback={centeredLoader}>
        <CategoriesList />
        <SideNavDivisor />
        <Signout />
      </React.Suspense>
      <SideNavDivisor />
    </SideNav>  
  );
};

const centeredLoader = (
  <Center>
    <Loading />
  </Center>
);