import React, { createContext, useReducer, useEffect, useContext } from 'react';

import reducer from './reducer';
import { initialState } from './constants';
import { getBooks as getBooksAction } from './actions';
import { getCharacters as getCharactersAction } from './actions';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getBooks = getBooksAction(dispatch);
    const getCharacters = getCharactersAction(dispatch);

    useEffect(() => {
      getBooks();
      getCharacters();
    }, []);

    return (
        <GlobalStateContext.Provider value={[state,{getBooks, getCharacters}]}>
          {children}
        </GlobalStateContext.Provider>
      );
} 

export const useBooksCharacters = () => useContext(GlobalStateContext);
