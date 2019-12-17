import React from 'react';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';

import { makeStyles } from '@material-ui/styles';
import { CHILDREN_PROP_TYPES } from '../constants/proptypes.constants';


const useStyles = makeStyles({
  container: {
    marginTop: '15%',
  },
});

export const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar>
        <h1>Shopping App</h1>
      </AppBar>
      <Container className={classes.container}>
        {children}
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: CHILDREN_PROP_TYPES,
}

