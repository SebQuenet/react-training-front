import React, { Fragment } from 'react';

import displayBookData from './displayBookData';
import { useBooksCharacters } from '../../state';

/* Display All books informations */ 
const displayInfos = (elements, keyArray) => 
  elements.map((element, index) => { 
    return (
      <Fragment key={`${index}`}>
        {index === 0 ? <h3>Details of the book: {element.name}</h3> : <h4>Details of the character N° {index}</h4>}
        {Object.entries(element).map(([key, value]) => displayBookData({key, value, keyArray}))}     
      </Fragment>
    )
});

export const BookCharacters = () => {
  const [{ books, characters }] = useBooksCharacters();

  return (
    <Fragment>
      {books.map((book) => {   
          const characterBook  = characters.filter(character => character.books.includes(book.url))
          characterBook.unshift(book);
          return displayInfos(characterBook, ['url', 'characters', 'povCharacters','allegiances', 'books', 'povBooks'])    
        })}    
    </Fragment>
  );
};

export default BookCharacters;