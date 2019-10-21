import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { stubMatchMedia } from 'testing';
import { Detail, DetailProps } from './Detail';

describe('<Detail />', () => {

    let div: any;
    let props: DetailProps;
    let originalMatchMedia: any;

    beforeEach(() => {
        props = { item : null };
        div = document.createElement('div');
        originalMatchMedia = window.matchMedia;
        window.matchMedia = stubMatchMedia(true); 
    });

    afterEach(() => {
        window.matchMedia = originalMatchMedia;
    });

    it('[SMOKE - DEEP] renders without crashing', () => {
        ReactDOM.render(
            <MemoryRouter>
                <Detail {...props} />
            </MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('[SMOKE - SHALLOW] renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <Detail {...props} />
            </MemoryRouter>);
    });

});