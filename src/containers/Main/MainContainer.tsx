import React, { useEffect } from 'react';
import { Loading, Filter, Insights, Charts, TransactionsList } from '../../components';
import { Main } from './styles';
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
    <Main>
      <React.Suspense fallback={<Loading/>}>
        <Filter />
        <Insights />
        <Charts />
        <TransactionsList />
      </React.Suspense>
    </Main>
  )
};
