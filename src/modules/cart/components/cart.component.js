import React from 'react';
// import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
});


export function Cart() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          Cart
        </Typography>
        <Typography>
          some stuff
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary" variant="outlined">
          Check out
        </Button>
      </CardActions>
    </Card>
  );
}

Cart.propTypes = {

}
