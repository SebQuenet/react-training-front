import React from 'react';
import renderer from 'react-test-renderer';
import Characters from './Characters';

jest.mock('react-redux', () => ({ connect: () => c => c }));
jest.mock('./Character/Character', () => 'mock-character-component');

const defaultProps = {
  urlBook: 'https://anapioficeandfire.com/api/books/2',
  charactersProps: [
    {
      url: 'https://anapioficeandfire.com/api/characters/1',
      name: '',
      gender: 'Female',
      culture: 'Braavosi',
      born: '',
      died: '',
      titles: [''],
      aliases: ['The Daughter of the Dusk'],
      father: '',
      mother: '',
      spouse: '',
      allegiances: [],
      books: ['https://anapioficeandfire.com/api/books/5'],
      povBooks: [],
      tvSeries: [''],
      playedBy: [''],
    },
    {
      url: 'https://anapioficeandfire.com/api/characters/2',
      name: 'Walder',
      gender: 'Male',
      culture: '',
      born: '',
      died: '',
      titles: [''],
      aliases: ['Hodor'],
      father: '',
      mother: '',
      spouse: '',
      allegiances: ['https://anapioficeandfire.com/api/houses/362'],
      books: [
        'https://anapioficeandfire.com/api/books/1',
        'https://anapioficeandfire.com/api/books/2',
        'https://anapioficeandfire.com/api/books/3',
        'https://anapioficeandfire.com/api/books/5',
        'https://anapioficeandfire.com/api/books/8',
      ],
      povBooks: [],
      tvSeries: ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 6'],
      playedBy: ['Kristian Nairn'],
    },
    {
      url: 'https://anapioficeandfire.com/api/characters/3',
      name: '',
      gender: 'Male',
      culture: '',
      born: '',
      died: '',
      titles: [''],
      aliases: ['Lamprey'],
      father: '',
      mother: '',
      spouse: '',
      allegiances: ['https://anapioficeandfire.com/api/houses/15'],
      books: ['https://anapioficeandfire.com/api/books/3'],
      povBooks: [],
      tvSeries: [''],
      playedBy: [''],
    },
  ],
};

describe('Characters component', () => {
  it('should render correctly', () => {
    // given
    const component = renderer.create(<Characters {...defaultProps} />);
    // when
    const tree = component.toJSON();
    // then
    expect(tree).toMatchSnapshot();
  });
});
