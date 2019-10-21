import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ListItemLink } from 'components';
import { devices, testItems } from 'stories/about';

const stories = storiesOf('Component: ListItemLink', module);

stories
    .add(devices[0].name, () => 
        <MemoryRouter>
            <ListItemLink item={testItems[0]} to={'test/1'} />
        </MemoryRouter>, devices[0].args)
    .add(devices[0].name, () => 
        <MemoryRouter>
            <ListItemLink item={testItems[1]} to={'test/1'} />
        </MemoryRouter>, devices[0].args);

