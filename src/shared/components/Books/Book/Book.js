// @flow

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router';
import { setSelectedUrlBook } from '../../../redux/actions/BookActions';

const useStyles = makeStyles({
  card: {
    minWidth: 250,
    marginBottom: 12,
    marginRight: 12,
    marginLeft: 12,
    marginTop: 12,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type PropTypes = {
  book: Object,
  updateSelectedUrlBook: Function,
};

/**
 * Book component
 */
const Book = ({ book, updateSelectedUrlBook }: PropTypes) => {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);

  /**
   * handle select book
   * @param url
   */
  function handleSelectBook(url: string) {
    setRedirect(true);
    updateSelectedUrlBook(url);
  }

  if (redirect) {
    return <Redirect to="/characters" />;
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Titre du Livre
        </Typography>
        <Typography variant="h5" component="h2">
          {book.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Auteur
        </Typography>
        {book.authors.map((author, index) => (
          <Typography key={index} variant="body2" component="p">
            {author}
          </Typography>
        ))}
        <br />
        <Typography className={classes.pos} color="textSecondary">
          Éditeur
        </Typography>
        <Typography variant="body2" component="p">
          {book.publisher}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleSelectBook(book.url)}>
          Voir plus...
        </Button>
      </CardActions>
    </Card>
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

/**
 * @private
 */
const actions = {
  updateSelectedUrlBook: setSelectedUrlBook,
};

export default connect(mapStateToProps, actions)(Book);
