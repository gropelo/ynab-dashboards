import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loading, Filter, Insights, Charts, TransactionsList } from 'components';
import { useDispatch, useRootState, useErrorBoundary } from 'hooks';
import { fetchCategories } from 'services/ynab.service';
import { Main, ScreenCenter } from './styles';

export const MainContainer = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const { filter, statusTransactions } = useRootState();
  const setErrorBoundary = useErrorBoundary();

  useEffect(() => {
    fetchCategories()
      .then(categories => dispatch({ type: 'SET_CATEGORIES', payload: categories }))
      .catch(setErrorBoundary);
  }, [dispatch, setErrorBoundary]);

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