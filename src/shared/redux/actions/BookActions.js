// @flow

import type { Action } from '../../types/redux';
import { SELECTED_URL_BOOK_VALUE_CHANGED } from '../../constants/BooksActionTypes';

/**
 * Update selected url book
 * @param {string} urlBook
 * @returns {Action}
 */
export const setSelectedUrlBook = (urlBook: string): Action => {
  return { type: SELECTED_URL_BOOK_VALUE_CHANGED, payload: urlBook };
};
