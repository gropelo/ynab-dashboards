import React, { useEffect } from 'react';
import { Loading, Filter, Insights, Charts, TransactionsList } from 'components';
import { useDispatch, useRootState, useErrorBoundary } from 'hooks';
import { dispatchTransactions, dispatchFilter } from 'state';
import { fetchTransactions } from 'services/ynab.service';
import { Main, ScreenCenter } from './styles';
import { useParams } from 'react-router-dom';

export const MainContainer = () => {
  const dispatch = useDispatch();
  const setErrorBoundary = useErrorBoundary();
  const { filter, statusTransactions } = useRootState();
  const { categoryId } = useParams();

  useEffect(() => {
    categoryId !== filter.categoryId && dispatchFilter({ ...filter, categoryId }, dispatch);
  }, [dispatch, filter, categoryId]);

  useEffect(() => {
    fetchTransactions()
      .then(transactions => dispatchTransactions(transactions, dispatch))
      .catch(setErrorBoundary);
  }, [dispatch, setErrorBoundary]);

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