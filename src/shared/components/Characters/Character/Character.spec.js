import React from 'react';
import renderer from 'react-test-renderer';
import _cloneDeep from 'lodash/cloneDeep';
import Character from './Character';

const defaultProps = {
  character: {
    url: 'https://anapioficeandfire.com/api/characters/2',
    name: 'Walder',
    gender: 'Male',
    culture: '',
    born: '',
    died: '',
    titles: [''],
    aliases: [
      'Balon the Brave',
      'Balon the Blessed',
      'Balon the Twice Crowned',
      'Balon the Widowmaker',
      'The Kraken King',
    ],
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
    playedBy: ['Patrick Malahide'],
  },
};

describe('Character component', () => {
  it('should render correctly when the real name of actor is define', () => {
    // given
    const component = renderer.create(<Character {...defaultProps} />);
    // when
    const tree = component.toJSON();
    // then
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when the real name of actor is not define', () => {
    // given
    const props = _cloneDeep(defaultProps);
    props.character.playedBy[0] = '';
    const component = renderer.create(<Character {...props} />);
    // when
    const tree = component.toJSON();
    // then
    expect(tree).toMatchSnapshot();
  });
});
