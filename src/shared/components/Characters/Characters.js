// @flow

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Character from './Character/Character';

import './Characters.css';

type PropTypes = {
  urlBook: string,
  charactersProps: Array<Object>,
};

/**
 * Characters component
 * @param {string} urlBook
 * @param {Array<Object>} charactersProps
 */
const Characters = ({ urlBook, charactersProps }: PropTypes) => {
  const [characters, setCharacters] = useState([]);

  /**
   * retrieve character information
   * @param {Array<Object>} bookCharacters
   * @returns {Promise<void>}
   */
  async function fetchCharacterData(bookCharacters: Array<Object>) {
    for (const url of bookCharacters) {
      const { data } = await axios.get(url);
      const aliases = data.aliases.map(alias => alias).filter(first => first !== '');
      if (aliases.length > 0) {
        charactersProps.push(data);
      }
    }
    setCharacters(charactersProps);
  }

  /**
   * retrieve book information
   * @param {string} url
   * @returns {Promise<void>}
   */
  async function fetchBookData(url: string) {
    const { data } = await axios.get(url);
    fetchCharacterData(data.characters);
  }

  useEffect(() => {
    fetchBookData(urlBook.urlBook);
  }, [urlBook.urlBook]);

  if (characters.length === 0) {
    return 'Chargement...';
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography className="App-Typography" variant="h4" component="h2" gutterBottom>
          ABBEAL - React Training Front Perfomed By Beauclair BILONG
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ul className="Characters__descriptionCards">
          {characters &&
            characters.map((character, index) => <Character key={index} character={character} />)}
        </ul>
      </Grid>
    </Grid>
  );
};

/**
 * default props
 * @type {{characters: []}}
 */
Characters.defaultProps = {
  charactersProps: [],
};

/**
 * @private
 * @param {Object} state
 * @returns {{}}
 */
const mapStateToProps = (state: Object) => ({
  ...state,
});

export default connect(mapStateToProps)(Characters);
