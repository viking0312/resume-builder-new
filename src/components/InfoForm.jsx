import { Grid, TextField } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const InfoForm = (props) => {
  const { values, setValues } = props;
  return (
    <>
      <Grid item>
        <TextField
          required
          id="outlined-required"
          label="Name"
          type="text"
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          defaultValue=""
        />
      </Grid>
      <Grid item>
        <TextField
          required
          id="outlined-required"
          label="Contact number"
          type="tel"
          onChange={(e) =>
            setValues({ ...values, contantNumber: e.target.value })
          }
          defaultValue=""
        />
      </Grid>
      <Grid item>
        <TextField
          required
          type="email"
          id="outlined-required"
          label="Email ID"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          defaultValue=""
        />
      </Grid>
      <Grid item>
        <TextField
          required
          type="text"
          id="outlined-required"
          label="Address"
          onChange={(e) => setValues({ ...values, address: e.target.value })}
          defaultValue=""
        />
      </Grid>
    </>
  );
};

InfoForm.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
};

export default InfoForm;
