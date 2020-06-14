import React, { useEffect, useState } from 'react';
import { Loading, Signout, CategoriesList } from '../../components';
import { Center, SideNav, SideNavTitle } from './styles';
import { fetchTransactions } from '../../services/ynab.service';
import { useDispatch, useRootState } from '../../hooks';

export const SideNavContainer = () => {
  const dispatch = useDispatch();
  
  const [/* state */, setState] = useState();

  useEffect(() => {
    fetchTransactions()
      .then(transactions => dispatch({ type: 'SET_TRANSACTIONS', payload: transactions }))
      .catch(err => {
        setState(() => {
          throw new Error(err);
        });
      });
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