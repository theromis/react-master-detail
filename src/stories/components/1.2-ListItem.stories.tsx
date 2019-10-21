import React from 'react';
import { storiesOf } from '@storybook/react';
import { devices, testItems } from 'stories/about';
import { ListItem } from 'components';

const stories = storiesOf('Component: ListItem', module);

stories
    .add(devices[0].name, () => <ListItem item={testItems[0]} />, devices[0].args)
    .add(devices[0].name, () => <ListItem item={testItems[1]} />, devices[0].args);
