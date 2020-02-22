
import { GET_BOOKS } from '../constants';

export const getBooks = dispatch => async () => {
    try {
      const data = await (await fetch('https://anapioficeandfire.com/api/books')).json();

      dispatch({
        type: GET_BOOKS,
        payload: { books: data }
      });

    } catch (error) {
      console.error(error);
    }  
};