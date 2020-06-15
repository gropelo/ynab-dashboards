import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loading, Filter, Insights, Charts, TransactionsList } from 'components';
import { useDispatch, useRootState, useErrorBoundary } from 'hooks';
import { dispatchCategories, dispatchFilter } from 'state';
import { fetchCategories } from 'services/ynab.service';
import { Main, ScreenCenter } from './styles';

export const MainContainer = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const { filter, statusTransactions } = useRootState();
  const setErrorBoundary = useErrorBoundary();

  useEffect(() => {
    fetchCategories()
      .then(categories => dispatchCategories(categories, dispatch))
      .catch(setErrorBoundary);
  }, [dispatch, setErrorBoundary]);

  useEffect(() => {
    categoryId !== filter.categoryId && dispatchFilter({...filter, categoryId}, dispatch);
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