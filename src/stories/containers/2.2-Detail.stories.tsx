import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Detail } from 'containers';
import { devices, testItems } from 'stories/about';

const stories = storiesOf('Container: Detail', module);

devices.forEach(device => 
    stories.add(device.name, () =>  
        <MemoryRouter><Detail item={testItems[0]} /></MemoryRouter>, device.args));