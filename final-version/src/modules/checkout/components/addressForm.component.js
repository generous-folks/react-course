import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useInput } from '../../../hooks/useInput.hook';

const INPUTS_CONFIG = {
  firstName: {
    props: { autoComplete: 'given-name', label: 'First name' },
    gridProps: { xs: 12, sm: 6 },
  },
  lastName: {
    props: { autoComplete: 'family-name', label: 'Last name' },
    gridProps: { xs: 12, sm: 6 },
  },
  address1: {
    props: { autoComplete: 'shipping-address line-1', label: 'Address line 1' },
    gridProps: { xs: 12 },
  },
  address2: {
    props: { autoComplete: 'shipping-address line-2', label: 'Address line 2' },
    gridProps: { xs: 12 },
  },
  city: {
    props: { autoComplete: 'shipping address-level2', label: 'City' },
    gridProps: { sm: 6, xs: 12 },
  },
  state: {
    props: { label: 'Region/State' },
    gridProps: { sm: 6, xs: 12 },
  },
  zip: {
    props: { autoComplete: 'shipping postal-code', label: 'Zip code' },
    gridProps: { sm: 6, xs: 12 },
  },

  country: {
    props: { autoComplete: 'shipping country', label: 'Country code' },
    gridProps: { xs: 12, sm: 6 },
  },
};

// eslint-disable-next-line react/prop-types
export const GridTextField = ({ props, gridProps, inputName }) => {
  const [value, onChange] = useInput();
  return (
    <Grid item {...gridProps}>
      <TextField
        required
        id={inputName}
        name={inputName}
        variant="standard"
        fullWidth
        {...props}
        value={value}
        onChange={onChange}
      />
    </Grid>
  );
};

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        {Object.keys(INPUTS_CONFIG).map(inputName => (
          <GridTextField key={inputName} {...INPUTS_CONFIG[inputName]} inputName={inputName} />
        ))}
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
