import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MasterDetail } from 'components';
import { MasterContainer, DetailContainer } from 'containers';
import './App.scss';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/master"
          render={props => (
            <MasterDetail MasterType={MasterContainer} masterProps={{}} 
                          DetailType={DetailContainer} detailProps={{}}/>
          )} />
        <Redirect exact from="/" to="/master" />
      </Switch>
    </Router>
  );
};