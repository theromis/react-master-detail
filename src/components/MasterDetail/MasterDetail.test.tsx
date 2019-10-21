import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, useRouteMatch, Route } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { stubMatchMedia, Simple, SimpleProps } from 'testing';
import { masterDetailHOC } from './MasterDetail';

describe('<MasterDetail /> HOC', () => {

    let div: any;
    let props: any;
    let originalMatchMedia: any;
    const masterProps = { description: 'Master' };
    const detailProps = { description: 'Detail' };

    const getTestSubject = () => {
        return masterDetailHOC<SimpleProps, SimpleProps>(Simple, Simple, masterProps, detailProps);
    };

    beforeEach(() => {
        div = document.createElement('div');
        props = {};
        originalMatchMedia = window.matchMedia;
        window.matchMedia = stubMatchMedia(true); 
    });

    afterEach(() => {
        window.matchMedia = originalMatchMedia;
    });

    it('[SMOKE - DEEP] renders without crashing', () => {
        const TestSubject = getTestSubject();
        ReactDOM.render(
            <MemoryRouter>
                <TestSubject {...props} />
            </MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('[SMOKE - SHALLOW] renders without crashing', () => {
        const TestSubject = getTestSubject();
        shallow(
            <MemoryRouter>
                <TestSubject {...props} />
            </MemoryRouter>);
    });

    describe('When on Smaller Screens', () => {
        
        let TestSubject: any;
        let testSubject: any;  

        beforeEach(() => {
            TestSubject = getTestSubject();
            window.matchMedia = stubMatchMedia(true); 
            testSubject = mount(
                <MemoryRouter>
                    <TestSubject {...props} />  
                </MemoryRouter>);
        });

        it('should only display the master component initially', () => {
            const master = testSubject.find(`[data-test="Master"]`);
            expect(master.length).toEqual(1);
            const detail = testSubject.find(`[data-test="Detail"]`);
            expect(detail.length).toEqual(0);
        });

        it('the master components should get the expected props', () => {
            const master = testSubject.find(`[data-test="Master"]`);
            expect(master.props().description).toEqual(masterProps.description);
        });

        it('should display only the detail page when there is a matching route', () => {
            const detailTest = mount(
                <MemoryRouter initialEntries={['detail/9']}>
                    <TestSubject {...props} />  
                </MemoryRouter>);
            const master = detailTest.find(`[data-test="Master"]`);
            expect(master.length).toEqual(0);  
            // TODO: INVESTIGATE: Test Not Correctly Matchin Our Detail Route  
        });

    });

    describe('When on Larger Screens', () => {

        let TestSubject: any;
        let testSubject: any;

        beforeEach(() => {
            TestSubject = getTestSubject();
            window.matchMedia = stubMatchMedia(false); 
            testSubject = mount(
                <MemoryRouter>
                    <TestSubject {...props} />
                </MemoryRouter>);
        });

        it('master and detail components should both be displayed', () => {
            const master = testSubject.find(`[data-test="Master"]`);
            expect(master.length).toEqual(1);
            const detail = testSubject.find(`[data-test="Detail"]`);
            expect(detail.length).toEqual(1);
        });

        it('master and detail components should both get the expected props', () => {
            const master = testSubject.find(`[data-test="Master"]`);
            expect(master.props().description).toEqual(masterProps.description);
            const detail = testSubject.find(`[data-test="Detail"]`);
            expect(detail.props().description).toEqual(detailProps.description);
        });

    });

});