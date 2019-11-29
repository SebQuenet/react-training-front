// @flow

/**
 * @module reducers/combined
 */

import { combineReducers } from 'redux';
import urlBook from './bookReducer';

/**
 * @memberof reducers/combined
 */
export default combineReducers({
  urlBook,
});
