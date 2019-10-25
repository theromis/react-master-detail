import React from 'react';
import { Provider } from 'react-redux';
import { createTestStore } from 'utils-test';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { DetailContainer } from 'containers';
import { devices, testItems } from 'stories/about';

const stories = storiesOf('Container: Detail', module);

devices.forEach(device => 
    stories.add(device.name, () =>  
        <Provider store={createTestStore()}>
            <MemoryRouter>
                <DetailContainer item={testItems[0]} />
            </MemoryRouter>
        </Provider>, device.args));