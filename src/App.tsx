import React from 'react';
import { SideNavContainer, MainContainer } from './containers';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-areas:
    "sidenav main";
  height: 100vh;
`;

const App = () => (
  <GridContainer>
    <BrowserRouter>
      <SideNavContainer />
      <Switch>
        <Route path="/categories/:categoryId" component={MainContainer} />
      </Switch>
    </BrowserRouter>
  </GridContainer>
);

export default App;
