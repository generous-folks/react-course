import React from 'react';
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { CHILDREN_PROP_TYPES } from '../constants/proptypes.constants';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0, 0.5)',
  },
  paper: {
    width: '75%',
    height: '75%',
    position: 'relative',
    top: '7.5%',
    left: '7.5%',
    padding: '5%',
  },
});


export const Modal = ({ children, closeModal, title }) => {
  const classes = useStyles();

  return (
    <div onClick={closeModal} className={classes.container}>
      <Paper className={classes.paper} onClick={e => e.stopPropagation()}>
        <h1>{title}</h1>
        {children}
        <Button variant='contained' onClick={closeModal}>Close</Button>
      </Paper>
    </div>
  );
};

Modal.propTypes = {
  children: CHILDREN_PROP_TYPES,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}
