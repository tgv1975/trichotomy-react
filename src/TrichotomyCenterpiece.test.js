import React from 'react';
import renderer from 'react-test-renderer';
import './setupTests';

import TrichotomyCenterpiece from './TrichotomyCenterpiece';

describe('Trichotomy', () => {
    it('Trichotomy is truthy', () => {
        expect(TrichotomyCenterpiece).toBeTruthy();
    });

    test('Renders TrichotomyCenterpiece container <DIV> element (default)', () => {
        const component = renderer.create(
            <TrichotomyCenterpiece />,
        );

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        expect(tree.type).toEqual('div');
    });

    test('Renders TrichotomyCenterpiece container <ARTICLE> element (custom)', () => {
        const component = renderer.create(
            <TrichotomyCenterpiece tag="article" />,
        );

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        expect(tree.type).toEqual('article');
    });

    test('Renders TrichotomyCenterpiece container element with "centerpiece" CSS class', () => {
        const component = renderer.create(
            <TrichotomyCenterpiece><div></div></TrichotomyCenterpiece>,
        );

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        expect(tree.props.className).toEqual('centerpiece');
    });

    test('Renders TrichotomyCenterpiece container element with "someCustomClass centerpiece" CSS class if set', () => {
        const component = renderer.create(
            <TrichotomyCenterpiece className="someCustomClass" />,
        );

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        expect(tree.props.className).toEqual('someCustomClass centerpiece');
    });

    test('Renders children into TrichotomyCenterpiece container element ', () => {
        const component = renderer.create(
            <TrichotomyCenterpiece direction="vertical">
                <div>First child</div>
                <div>Second child</div>
                <div>Third child</div>
            </TrichotomyCenterpiece>,
        );

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.children).toBeTruthy();
    });
});
