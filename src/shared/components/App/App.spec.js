import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

jest.mock('../Books/Books', () => 'mock-books-component');

describe('App component', () => {
  it('should render correctly', () => {
    // given
    const component = renderer.create(<App />);
    // when
    const tree = component.toJSON();
    // then
    expect(tree).toMatchSnapshot();
  });
});
