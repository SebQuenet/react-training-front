// @flow

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Books from '../Books/Books';

import './App.css';

/**
 * App component
 */
const App = () => {
  const [books, setBooks] = useState([]);

  /**
   * retrieve all GOT books
   * @returns {Promise<void>}
   */
  async function fetchBookData() {
    const { data } = await axios.get('https://anapioficeandfire.com/api/books');
    setBooks(data);
  }

  useEffect(() => {
    fetchBookData();
  });

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className="App-Typography" variant="h4" component="h2" gutterBottom>
            ABBEAL - React Training Front Perfomed By Beauclair BILONG
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Books books={books} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
