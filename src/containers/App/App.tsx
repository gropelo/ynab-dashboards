import React from 'react';
import { SideNavContainer } from '../SideNav';
import { MainContainer } from '../Main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GridContainer } from './styled';

export const App = () => (
  <GridContainer>
    <BrowserRouter>
      <SideNavContainer />
      <Switch>
        <Route path="/categories/:categoryId" component={MainContainer} />
      </Switch>
    </BrowserRouter>
  </GridContainer>
);
