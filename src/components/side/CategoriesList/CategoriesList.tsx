import React from 'react';
import { SideNavLink } from './styled';
import { ICategory } from '../../../types';
import { useHistory } from 'react-router-dom';

interface IProps {
  categories: ICategory[];
}

export const CategoriesList = ({ categories }: IProps) => {
  const history = useHistory();
  
  return (
    <>
      {categories.map(c => 
        <SideNavLink key={c.id} onClick={() => history && history.push(`/categories/${c.id}`)}>{c.name}</SideNavLink>
      )}
    </>
  )
};