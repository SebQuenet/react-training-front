import { GET_BOOKS, GET_CHARACTERS } from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload.books
      };
      case GET_CHARACTERS:
        return {
          ...state,
          characters: action.payload.characters
        };
    default:
      return state;
  }
};

export default reducer;