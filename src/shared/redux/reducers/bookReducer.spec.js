import BookReducer from './bookReducer';

const initialState = {};

describe('book reducer', () => {
  it('should return default state on undefined state', () => {
    // given
    const action = {};
    // when
    const newState = BookReducer(undefined, action);
    // then
    const expectedState = { urlBook: '' };
    expect(newState).toEqual(expectedState);
  });

  it('should return same state on unhandled action', () => {
    // given
    const action = {};
    // when
    const newState = BookReducer(initialState, action);
    // then
    expect(newState).toBe(initialState);
  });

  it('should return new state on set selected url book', () => {
    // given
    const newUrlBook = 'https://anapioficeandfire.com/api/books/1';
    const action = {
      type: 'SELECTED_URL_BOOK_VALUE_CHANGED',
      payload: newUrlBook,
    };
    // when
    const newState = BookReducer(initialState, action);
    // then
    const expectedState = { urlBook: newUrlBook };
    expect(newState).not.toBe(initialState);
    expect(newState).toEqual(expectedState);
  });
});
