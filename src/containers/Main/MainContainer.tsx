import React, { useEffect } from 'react';
import { Loading, Filter, Insights, Charts, TransactionsList } from '../../components';
import { Main, ScreenCenter } from './styles';
import { useParams } from 'react-router-dom';
import { useDispatch, useRootState } from '../../hooks';
import { fetchCategories } from '../../services/ynab.service';

export const MainContainer = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const { filter, statusTransactions } = useRootState();

  useEffect(() => {
    fetchCategories()
      .then(categories => dispatch({ type: 'SET_CATEGORIES', payload: categories }));
  }, [dispatch]);

  useEffect(() => {
    categoryId !== filter.categoryId && dispatch({ type: 'SET_FILTER', payload: {...filter, categoryId}});
  }, [dispatch, filter, categoryId]);

  if (statusTransactions === 'LOADING') {
    return (
      <ScreenCenter>
        <Loading/>
      </ScreenCenter>
    );
  }
  
  return (
    <Main>
      <Filter />
      <Insights />
      <Charts />
      <TransactionsList />
    </Main>
  )
};