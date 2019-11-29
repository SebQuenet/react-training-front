// @flow

import React from 'react';
import { connect } from 'react-redux';
import Book from './Book/Book';

import './Books.css';

type PropTypes = {
  books: Array<Object>,
};

/**
 * Books component
 */
const Books = ({ books }: PropTypes) => {
  return (
    <ul className="Books__descriptionCards">
      {books && books.map((book, index) => <Book key={index} book={book} />)}
    </ul>
  );
};

/**
 * @private
 * @param {Object} state
 * @returns {{}}
 */
const mapStateToProps = (state: string) => ({
  ...state,
});

export default connect(mapStateToProps)(Books);
