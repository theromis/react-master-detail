import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { stubMatchMedia, createTestStore } from 'testing';
import { MasterContainer, MasterProps } from './Master';

describe('<Master />', () => {

    let div: any;
    let props: MasterProps;
    let originalMatchMedia: any;
    let testStore: any;

    beforeEach(() => {
        props = { items : [] };
        testStore = createTestStore();
        div = document.createElement('div');
        originalMatchMedia = window.matchMedia;
        window.matchMedia = stubMatchMedia(true); 
    });

    afterEach(() => {
        window.matchMedia = originalMatchMedia;
    });

    it('[SMOKE - DEEP] renders without crashing', () => {
        ReactDOM.render(
            <Provider store={testStore}>
                <MemoryRouter>
                    <MasterContainer {...props} />
                </MemoryRouter>
            </Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('[SMOKE - SHALLOW] renders without crashing', () => {
        shallow(
            <Provider store={testStore}>
                <MemoryRouter>
                    <MasterContainer {...props} />
                </MemoryRouter>
            </Provider>);
    });

});