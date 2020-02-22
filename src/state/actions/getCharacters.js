import {
    GET_CHARACTERS
  } from '../constants';
  
  export const getCharacters = dispatch => async () => {
    try { 
      const data = await (await fetch('https://anapioficeandfire.com/api/characters')).json();

        dispatch({
          type: GET_CHARACTERS,
          payload: {
            characters: data
          }
        });
      
    } catch (error) {
      console.error(error);
    }
  };