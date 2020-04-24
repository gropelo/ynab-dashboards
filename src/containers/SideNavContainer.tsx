import React from 'react';
import { useCategories } from '../hooks';
import { Loading, Error, SideNav } from '../components';

export const SideNavContainer = () => {
  const { categories, status } = useCategories();

  if (status === 'LOADING') return <Loading />;
  if (status === 'ERROR') return <Error />;
  return <SideNav categories={categories} />;
};