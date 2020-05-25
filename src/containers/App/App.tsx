import React from 'react';
import { SideNavContainer } from '../SideNav';
import { MainContainer } from '../Main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GridContainer } from './styles';
import { RecoilRoot } from 'recoil';

export const App = () => (
  <RecoilRoot>
    <GridContainer>
      <BrowserRouter>
        <SideNavContainer />
        <Switch>
          <Route path="/" exact component={MainContainer} />
          <Route path="/categories/:categoryId" component={MainContainer} />
        </Switch>
      </BrowserRouter>
    </GridContainer>
  </RecoilRoot>
);
