import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Home', () => {
  it('renders', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
