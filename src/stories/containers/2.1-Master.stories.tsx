import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Master } from 'containers';
import { devices, testItems } from 'stories/about';

const stories = storiesOf('Container: Master', module);

devices.forEach(device => 
    stories.add(device.name, () =>  
        <MemoryRouter><Master items={testItems} /></MemoryRouter>, device.args));