import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from 'components';
import { devices } from 'stories/about';

const stories = storiesOf('Component: Header', module);

devices.forEach(device => 
    stories.add(device.name, () =>  
        <MemoryRouter><Header title="My Title" /></MemoryRouter>, device.args));

stories.add(`${devices[1].name} Hide Back`, () =>  
    <MemoryRouter><Header title="My Title" hideBackButton={true} /></MemoryRouter>, devices[1].args);