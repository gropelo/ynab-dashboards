import React, { useEffect } from 'react';
import { Loading, Filter, Insights, Charts, TransactionsList } from '../../components';
import { Main, ScreenCenter } from './styles';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { filterState } from '../../state';

export const MainContainer = () => {
  const { categoryId } = useParams();
  const [filter, setFilter] = useRecoilState(filterState);

  useEffect(() => {
    categoryId !== filter.categoryId && setFilter({...filter, categoryId});
  }, [setFilter, filter, categoryId]);
  
  return (
    <React.Suspense fallback={centeredLoading}>
      <Main>
        <Filter />
        <Insights />
        <Charts />
        <TransactionsList />
      </Main>
    </React.Suspense>
  )
};

const centeredLoading = (
  <ScreenCenter>
    <Loading/>
  </ScreenCenter>
);
