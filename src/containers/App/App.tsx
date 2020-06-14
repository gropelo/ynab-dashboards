import React from 'react';
import { SideNavContainer } from '../SideNav';
import { MainContainer } from '../Main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GridContainer } from './styles';
import { StateProvider } from '../../state';
import { ErrorBoundary } from '../../components/ErrorBoundary';

export const App = () => (
  <StateProvider>
    <ErrorBoundary>
      <GridContainer>
        <BrowserRouter>
          <SideNavContainer />
          <Switch>
            <Route path="/" exact component={MainContainer} />
            <Route path="/categories/:categoryId" component={MainContainer} />
          </Switch>
        </BrowserRouter>
      </GridContainer>
    </ErrorBoundary>
  </StateProvider>
);
