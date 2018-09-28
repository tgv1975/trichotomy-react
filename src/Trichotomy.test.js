import React from 'react';
import Trichotomy from './Trichotomy';
import renderer from 'react-test-renderer';

describe('Trichotomy', () => {
    it('Trichotomy is truthy', () => {
        expect(Trichotomy).toBeTruthy();
    });

    test('Renders Trichotomy container <DIV> element (default)', () => {
        const component = renderer.create(
            <Trichotomy direction="vertical"></Trichotomy>
        );

        let tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        expect(tree.type).toEqual('div');
    });

    test('Renders Trichotomy container <NAV> element (custom)', () => {
        const component = renderer.create(
            <Trichotomy tag="nav" direction="vertical"></Trichotomy>
        );

        let tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        expect(tree.type).toEqual('nav');
    });

    test('Renders Trichotomy container element with "trichotomy vertical" CSS classes', () => {
        const component = renderer.create(
            <Trichotomy direction="vertical"></Trichotomy>
        );

        let tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        expect(tree.type).toEqual('div');
    });

    test('Renders Trichotomy container element with "trichotomy horizontal" CSS classes', () => {
        const component = renderer.create(
            <Trichotomy direction="horizontal"></Trichotomy>
        );

        let tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        expect(tree.type).toEqual('div');
    });
});
