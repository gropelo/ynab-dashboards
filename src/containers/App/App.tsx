import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from 'state';
import { SideNavContainer, RouteContainer } from 'containers';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { GridContainer } from './styles';

export const App = () => (
  <StateProvider>
    <ErrorBoundary>
      <GridContainer>
        <BrowserRouter>
          <SideNavContainer />
          <RouteContainer />
        </BrowserRouter>
      </GridContainer>
    </ErrorBoundary>
  </StateProvider>
);