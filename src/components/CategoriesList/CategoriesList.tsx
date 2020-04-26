import React from 'react';
import { SideNavLink } from './styled';
import { ICategory } from '../../types';
import { useHistory, useLocation } from 'react-router-dom';

interface IProps {
  categories: ICategory[];
}

export const CategoriesList = ({ categories }: IProps) => {
  const location = useLocation();
  const history = useHistory();
  
  return (
    <>
      <SideNavLink onClick={() => history && history.push('/')} active={location.pathname === '/'}>All Categories</SideNavLink>
      {categories.map(c => 
        <SideNavLink key={c.id} active={`/categories/${c.id}` === location.pathname} onClick={() => history && history.push(`/categories/${c.id}`)}>{c.name}</SideNavLink>
      )}
    </>
  )
};