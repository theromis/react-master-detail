import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { Header } from '../components';

export default {
  title: 'Header',
};

storiesOf('Header', module)
  .addDecorator(story => (
    <Router><Route path="/" >{ story() }</Route></Router>
  ))
  .add('EmptyTitle', () => <Header title="" />);  

