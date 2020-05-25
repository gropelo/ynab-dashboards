import React from 'react';
import { SideNavLink } from './styles';
import { useRecoilValue } from 'recoil';
import { useHistory, useLocation } from 'react-router-dom';
import { categoriesState } from '../../state';
import { ICategory } from '../../types';

export const CategoriesList = () => {
  const location = useLocation();
  const history = useHistory();
  const categories = useRecoilValue(categoriesState) as ICategory[];
  
  return (
    <>
      <SideNavLink onClick={() => history && history.push('/')} active={location.pathname === '/'}>All Categories</SideNavLink>
      {categories.map(c => 
        <SideNavLink key={c.id} active={`/categories/${c.id}` === location.pathname} onClick={() => history && history.push(`/categories/${c.id}`)}>{c.name}</SideNavLink>
      )}
    </>
  )
};