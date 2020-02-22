import React from 'react';
import { GlobalStateProvider } from './state';
import BookCharacters from './components/BookCharacters';

function App() {
  return (
  <GlobalStateProvider>
      <BookCharacters />
  </GlobalStateProvider>
  );
}

export default App;

