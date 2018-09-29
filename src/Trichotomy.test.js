import React from 'react';
import renderer from 'react-test-renderer';
import './setupTests';

import Trichotomy from './Trichotomy';

describe('Trichotomy', () => {
    it('Trichotomy is truthy', () => {
        expect(Trichotomy).toBeTruthy();
    });

    test('Renders Trichotomy container <DIV> element (default)', () => {
        const component = renderer.create(
            <Trichotomy direction="vertical" />,
        );

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        expect(tree.type).toEqual('div');
    });

    test('Renders Trichotomy container <NAV> element (custom)', () => {
        const component = renderer.create(
            <Trichotomy tag="nav" direction="vertical" />,
        );

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        expect(tree.type).toEqual('nav');
    });

    test('Renders Trichotomy container element with "trichotomy vertical" CSS classes if set', () => {
        const component = renderer.create(
            <Trichotomy direction="vertical" />,
        );

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        expect(tree.props.className).toEqual('trichotomy vertical');
    });

    test('Renders Trichotomy container element with "trichotomy horizontal" CSS classes if set', () => {
        const component = renderer.create(
            <Trichotomy direction="horizontal" />,
        );

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        expect(tree.props.className).toEqual('trichotomy horizontal');
    });

    test('Renders Trichotomy container element with "someCustomClass trichotomy vertical" CSS classes if set', () => {
        const component = renderer.create(
            <Trichotomy direction="horizontal" className="someCustomClass" />,
        );

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        expect(tree.props.className).toEqual('someCustomClass trichotomy horizontal');
    });

    test('Renders children into Trichotomy container element ', () => {
        const component = renderer.create(
            <Trichotomy direction="vertical">
                <div>First child</div>
                <div>Second child</div>
                <div>Third child</div>
            </Trichotomy>,
        );

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.children).toBeTruthy();
    });
});
