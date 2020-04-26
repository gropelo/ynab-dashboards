import React from 'react';
import { useCategories } from '../../hooks';
import { Loading, Error, Signout, CategoriesList } from '../../components';
import { SideNav, SideNavTitle, SideNavDivisor } from './styled';

export const SideNavContainer = () => {
  const { categories, status } = useCategories();

  if (status === 'LOADING') return <Loading />;
  if (status === 'ERROR') return <Error />;
  return (
    <SideNav>
      <SideNavTitle>Categories</SideNavTitle>
      <SideNavDivisor />
      <CategoriesList categories={categories} />
      <SideNavDivisor />
      <Signout />
      <SideNavDivisor />
    </SideNav>  
  );
};