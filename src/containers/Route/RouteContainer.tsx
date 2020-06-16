import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainContainer } from 'containers';
import { NotFound } from 'components';

export function RouteContainer() {
  return (
    <Switch>
      <Route path="/" exact component={MainContainer} />
      <Route path="/categories/:categoryId" component={MainContainer} />
      <Route component={NotFound} />
    </Switch>
  )
}