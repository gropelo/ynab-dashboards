import React, { useEffect } from 'react';
import { Loading, Signout, CategoriesList } from 'components';
import { useDispatch, useRootState, useErrorBoundary } from 'hooks';
import { fetchTransactions } from 'services/ynab.service';
import { Center, SideNav, SideNavTitle } from './styles';
import { dispatchTransactions } from 'state';

export const SideNavContainer = () => {
  const dispatch = useDispatch();
  const setErrorBoundary = useErrorBoundary();

  useEffect(() => {
    fetchTransactions()
      .then(transactions => dispatchTransactions(transactions, dispatch))
      .catch(setErrorBoundary);
  }, [dispatch, setErrorBoundary]);
  
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