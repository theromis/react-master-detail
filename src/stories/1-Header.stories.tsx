import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { Header } from 'components';

export default {
  title: 'Header',
};

const mobileViewport = { viewport: { defaultViewport: 'iphonex' }};

storiesOf('Header', module)
  .addDecorator(story => (
    <Router><Route path="/" >{ story() }</Route></Router>
  ))
  .add('Empty Title', () => <Header title="" />)
  .add('With Title', () => <Header title="Hello Title" />)
  .add('Mobile: Hide Back', () => <Header title="Hello Title" hideBackButton={true} />, mobileViewport)
  .add('Mobile: Show Back', () => <Header title="Hello Title" hideBackButton={false} />, mobileViewport)

