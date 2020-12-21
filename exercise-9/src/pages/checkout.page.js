import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { Layout } from '../components/layout.component';
import Checkout from '../modules/checkout/checkout.component';

export const CheckoutPage = () => {
  return (
    <Layout>
      <Box display="flex" justifyContent="space-between" m={1}>
        <h2>Checkout</h2>
        <Button component={Link} to="/" color="secondary" variant="outlined">
          Return to Home
        </Button>
      </Box>
      <Checkout />
    </Layout>
  );
};
