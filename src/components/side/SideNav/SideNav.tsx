import React from 'react';
import { ICategory } from '../../../types';
import { SideNav as SideNavStyled, SideNavTitle, SidebarDivisor } from './styled';
import { CategoriesList } from '../CategoriesList';
import { Signout } from '../Signout';

interface IProps {
  categories: ICategory[];
}

export const SideNav = ({ categories }: IProps) => (
  <SideNavStyled>
    <SideNavTitle>Categories</SideNavTitle>
    <SidebarDivisor />
    <CategoriesList categories={categories} />
    <SidebarDivisor />
    <Signout />
    <SidebarDivisor />
  </SideNavStyled>
);