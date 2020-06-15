import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading, Filter, Insights, Charts, TransactionsList } from 'components';
import { useDispatch, useRootState } from 'hooks';
import { fetchCategories } from 'services/ynab.service';
import { Main, ScreenCenter } from './styles';

export const MainContainer = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const { filter, statusTransactions } = useRootState();
  const [/* state */, setState] = useState();

  useEffect(() => {
    fetchCategories()
      .then(categories => dispatch({ type: 'SET_CATEGORIES', payload: categories }))
      .catch(err => {
        setState(() => {
          throw new Error(err);
        });
      });
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