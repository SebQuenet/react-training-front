import { setSelectedUrlBook } from './BookActions';

describe('BookActions function', () => {
  it('should return correct action for selected url book changed', () => {
    // given
    const urlBook = 'https://anapioficeandfire.com/api/books/1';
    // when
    const actual = setSelectedUrlBook(urlBook);
    // then
    const { type, payload } = actual;
    expect(payload).toEqual(urlBook);
    expect(type).toBe('SELECTED_URL_BOOK_VALUE_CHANGED');
  });
});
