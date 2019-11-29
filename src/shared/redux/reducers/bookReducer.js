// @flow

import type { Action } from '../../types/redux';
import { SELECTED_URL_BOOK_VALUE_CHANGED } from '../../constants/BooksActionTypes';

type StateType = {
  urlBook: string,
};

const initialState: StateType = {
  urlBook: '',
};

/**
 * Book reducer
 * @param {StateType} state
 * @param {Action} action
 * @returns {{book: *}|StateType}
 */
export default function bookReducer(state: StateType = initialState, action: Action): StateType {
  switch (action.type) {
    case SELECTED_URL_BOOK_VALUE_CHANGED: {
      return {
        ...state,
        urlBook: action.payload,
      };
    }
    default:
      return state;
  }
}
