import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

const LargeCardWrapper = ({ children }) => (
  <Grid item xs={12}>
    {children}
  </Grid>
);

LargeCardWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

const SmallCardWrapper = ({ children }) => (
  <Grid item xs={12} sm={6} md={4}>
    {children}
  </Grid>
);

SmallCardWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export const CardWrapper = {
  S: SmallCardWrapper,
  L: LargeCardWrapper,
};
