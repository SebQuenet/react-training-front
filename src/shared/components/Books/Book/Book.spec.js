import React from 'react';
import renderer from 'react-test-renderer';
import Book from './Book';
import { shallow } from '../../../../../tools/config/test/enzyme';

jest.mock('react-redux', () => ({ connect: () => c => c }));

const defaultProps = {
  book: {
    url: 'https://anapioficeandfire.com/api/books/4',
    name: 'The Hedge Knight',
    isbn: '978-0976401100',
    authors: ['George R. R. Martin'],
    numberOfPages: 164,
    publisher: 'Dabel Brothers Publishing',
    country: 'United States',
    mediaType: 'GraphicNovel',
    released: '2005-03-09T00:00:00',
    characters: [
      'https://anapioficeandfire.com/api/characters/29',
      'https://anapioficeandfire.com/api/characters/38',
      'https://anapioficeandfire.com/api/characters/40',
      'https://anapioficeandfire.com/api/characters/41',
      'https://anapioficeandfire.com/api/characters/46',
      'https://anapioficeandfire.com/api/characters/54',
    ],
    povCharacters: ['https://anapioficeandfire.com/api/characters/329'],
  },
};

describe('Book component', () => {
  it('should render correctly', () => {
    // given
    const component = renderer.create(<Book {...defaultProps} />);
    // when
    const tree = component.toJSON();
    // then
    expect(tree).toMatchSnapshot();
  });

  it('should update url book when handleSelectBook is called', () => {
    // given
    const updateSelectedUrlBook = jest.fn();
    const component = shallow(
      <Book {...defaultProps} updateSelectedUrlBook={updateSelectedUrlBook} />,
    );
    // when
    component.instance().handleSelectBook('urlBook')();
    // then
    expect(updateSelectedUrlBook).toHaveBeenCalled();
  });
});
