import React from 'react';
import { SideNavLink } from './styles';
import { useHistory, useLocation } from 'react-router-dom';
import { ICategory } from 'types';

interface IProps {
  categories: ICategory[];
}

export const CategoriesList = ({ categories }: IProps) => {
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <SideNavLink onClick={() => history.push('/')} active={location.pathname === '/'}>All Categories</SideNavLink>
      {categories.map(c =>
        <SideNavLink key={c.id} active={`/categories/${c.id}` === location.pathname} onClick={() => history.push(`/categories/${c.id}`)}>{c.name}</SideNavLink>
      )}
    </>
  )
};