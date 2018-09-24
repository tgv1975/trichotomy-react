import React from 'react';
import Trichotomy from './Trichotomy';
import renderer from 'react-test-renderer';
import timestamp from 'time-stamp';

describe('Trichotomy', () => {
    it('Trichotomy is truthy', () => {
        expect(Trichotomy).toBeTruthy();
    });
});

test('Renders a DIV element', () => {
    const component = renderer.create(
        <Trichotomy direction="vertical"></Trichotomy>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.type).toEqual('div');
});
