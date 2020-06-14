import React, { useEffect } from 'react';
import { Loading, Signout, CategoriesList } from '../../components';
import { Center, SideNav, SideNavTitle } from './styles';
import { fetchTransactions } from '../../services/ynab.service';
import { useDispatch, useRootState } from '../../hooks';

export const SideNavContainer = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetchTransactions()
      .then(transactions => dispatch({ type: 'SET_TRANSACTIONS', payload: transactions }));
  }, [dispatch]);
  
  const { categories, statusCategories } = useRootState();

  return (
    <SideNav>
      <SideNavTitle>Categories</SideNavTitle>
      
      {
        statusCategories === 'LOADING' ? (
          <Center>
            <Loading />
          </Center>
        ) : (
          <CategoriesList categories={categories} />
        )
      }
      
      <Signout />
    </SideNav>  
  );
};