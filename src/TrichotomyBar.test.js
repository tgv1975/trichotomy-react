import React from 'react';
import renderer from 'react-test-renderer';
import './setupTests';

import TrichotomyBar from './TrichotomyBar';

describe('Trichotomy', () => {
    it('Trichotomy is truthy', () => {
        expect(TrichotomyBar).toBeTruthy();
    });

    test('Renders TrichotomyBar container <DIV> element (default)', () => {
        const component = renderer.create(
            <TrichotomyBar />,
        );

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        expect(tree.type).toEqual('div');
    });

    test('Renders TrichotomyBar container <ASIDE> element (custom)', () => {
        const component = renderer.create(
            <TrichotomyBar tag="aside" />,
        );

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        expect(tree.type).toEqual('aside');
    });

    test('Renders TrichotomyBar container element with "right" CSS class if set', () => {
        const component = renderer.create(
            <TrichotomyBar right />,
        );

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        expect(tree.props.className).toEqual('right');
    });

    test('Renders TrichotomyBar container element with "someCustomClass right" CSS classes if set', () => {
        const component = renderer.create(
            <TrichotomyBar right className="someCustomClass" />,
        );

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        expect(tree.props.className).toEqual('someCustomClass right');
    });

    test('Renders children into TrichotomyBar container element ', () => {
        const component = renderer.create(
            <TrichotomyBar>
                <div>First child</div>
                <div>Second child</div>
                <div>Third child</div>
            </TrichotomyBar>,
        );

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.children).toBeTruthy();
    });
});
