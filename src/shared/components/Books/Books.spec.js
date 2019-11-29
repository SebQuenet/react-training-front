import React from 'react';
import renderer from 'react-test-renderer';
import Books from './Books';

jest.mock('react-redux', () => ({ connect: () => c => c }));
jest.mock('./Book/Book', () => 'mock-book-component');

const defaultProps = {
  books: [
    {
      url: 'https://anapioficeandfire.com/api/books/1',
      name: 'A Game of Thrones',
      isbn: '978-0553103540',
      authors: ['George R. R. Martin'],
      numberOfPages: 694,
      publisher: 'Bantam Books',
      country: 'United States',
      mediaType: 'Hardcover',
      released: '1996-08-01T00:00:00',
      characters: [
        'https://anapioficeandfire.com/api/characters/2',
        'https://anapioficeandfire.com/api/characters/12',
        'https://anapioficeandfire.com/api/characters/13',
        'https://anapioficeandfire.com/api/characters/16',
        'https://anapioficeandfire.com/api/characters/20',
        'https://anapioficeandfire.com/api/characters/27',
        'https://anapioficeandfire.com/api/characters/31',
      ],
      povCharacters: [
        'https://anapioficeandfire.com/api/characters/148',
        'https://anapioficeandfire.com/api/characters/208',
        'https://anapioficeandfire.com/api/characters/232',
        'https://anapioficeandfire.com/api/characters/339',
      ],
    },
    {
      url: 'https://anapioficeandfire.com/api/books/2',
      name: 'A Clash of Kings',
      isbn: '978-0553108033',
      authors: ['George R. R. Martin'],
      numberOfPages: 768,
      publisher: 'Bantam Books',
      country: 'United States',
      mediaType: 'Hardback',
      released: '1999-02-02T00:00:00',
      characters: [
        'https://anapioficeandfire.com/api/characters/2',
        'https://anapioficeandfire.com/api/characters/12',
        'https://anapioficeandfire.com/api/characters/13',
        'https://anapioficeandfire.com/api/characters/16',
      ],
      povCharacters: [
        'https://anapioficeandfire.com/api/characters/148',
        'https://anapioficeandfire.com/api/characters/208',
        'https://anapioficeandfire.com/api/characters/232',
        'https://anapioficeandfire.com/api/characters/583',
      ],
    },
    {
      url: 'https://anapioficeandfire.com/api/books/3',
      name: 'A Storm of Swords',
      isbn: '978-0553106633',
      authors: ['George R. R. Martin'],
      numberOfPages: 992,
      publisher: 'Bantam Books',
      country: 'United States',
      mediaType: 'Hardcover',
      released: '2000-10-31T00:00:00',
      characters: [
        'https://anapioficeandfire.com/api/characters/2',
        'https://anapioficeandfire.com/api/characters/3',
        'https://anapioficeandfire.com/api/characters/7',
        'https://anapioficeandfire.com/api/characters/12',
        'https://anapioficeandfire.com/api/characters/13',
        'https://anapioficeandfire.com/api/characters/16',
        'https://anapioficeandfire.com/api/characters/20',
      ],
      povCharacters: [
        'https://anapioficeandfire.com/api/characters/148',
        'https://anapioficeandfire.com/api/characters/208',
        'https://anapioficeandfire.com/api/characters/232',
        'https://anapioficeandfire.com/api/characters/529',
      ],
    },
  ],
};

describe('Books component', () => {
  it('should render correctly', () => {
    // given
    const component = renderer.create(<Books {...defaultProps} />);
    // when
    const tree = component.toJSON();
    // then
    expect(tree).toMatchSnapshot();
  });
});
