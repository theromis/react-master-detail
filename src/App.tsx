import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { masterDetailHOC } from './components';
import { MasterContainer, DetailContainer } from './containers';
import './App.scss';

const TestMasterDetail = masterDetailHOC(MasterContainer, DetailContainer);

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/master"
          render={props => (
            <TestMasterDetail {...props} />
          )} />
        <Redirect exact from="/" to="/master" />
      </Switch>
      
      
    </Router>
  );
};