import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';  
import { MemoryRouter } from 'react-router-dom';
import { stubMatchMedia, createTestStore } from 'utils-test';
import { DetailContainer, DetailProps } from './Detail';

describe('<Detail />', () => {

    let div: any;
    let props: DetailProps;
    let originalMatchMedia: any;
    let testStore: any;

    beforeEach(() => {
        props = { item : null };
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
                    <DetailContainer {...props} />
                </MemoryRouter>
            </Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('[SMOKE - SHALLOW] renders without crashing', () => {
        mount(
            <Provider store={testStore}>
                <MemoryRouter>
                    <DetailContainer {...props} />
                </MemoryRouter>
            </Provider>);
    });

});