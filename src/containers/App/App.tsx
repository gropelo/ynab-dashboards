import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StateProvider } from 'state';
import { SideNavContainer, MainContainer } from 'containers';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { GridContainer } from './styles';

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
