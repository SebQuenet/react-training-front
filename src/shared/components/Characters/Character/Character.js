// @flow

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
  character: Object,
};

/**
 * Character component
 * @param {Object} character
 */
const Character = ({ character }: PropTypes) => {
  const classes = useStyles();
  const notDefined = 'Non Defini(e)';

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Acteur
        </Typography>
        {character.playedBy.map((play, index) => (
          <Typography key={index} variant="h5" component="h2">
            {play !== '' ? play : notDefined}
          </Typography>
        ))}
        <Typography className={classes.pos} color="textSecondary">
          Rôle(s)
        </Typography>
        {character.aliases.map((alias, index) => (
          <Typography key={index} variant="body2" component="p">
            {alias}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default Character;
