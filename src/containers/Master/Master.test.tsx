import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { stubMatchMedia } from 'testing';
import { Master, MasterProps } from './Master';

describe('<Master />', () => {

    let div: any;
    let props: MasterProps;
    let originalMatchMedia: any;

    beforeEach(() => {
        props = { items : [] };
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
                <Master {...props} />
            </MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('[SMOKE - SHALLOW] renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <Master {...props} />
            </MemoryRouter>);
    });

});