import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import { createTestStore } from 'utils-test';
import { MemoryRouter } from 'react-router-dom';
import { MasterContainer } from 'containers';
import { devices, testItems } from 'stories/about';

const stories = storiesOf('Container: Master', module);
devices.forEach(device => 
    stories.add(device.name, () =>  
    <Provider store={createTestStore()}>
        <MemoryRouter>
            <MasterContainer items={testItems} />
        </MemoryRouter>
    </Provider>, device.args));