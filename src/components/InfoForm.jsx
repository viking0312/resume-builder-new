import React from "react";
import { Grid, TextField } from "@mui/material";

const InfoForm = () => {
  return (
    <>
      <Grid item>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue=""
        />
      </Grid>
      <Grid item>
        <TextField
          required
          id="outlined-required"
          label="Contact number"
          defaultValue=""
        />
      </Grid>
      <Grid item>
        <TextField
          required
          id="outlined-required"
          label="Email ID"
          defaultValue=""
        />
      </Grid>
      <Grid item>
        <TextField
          required
          id="outlined-required"
          label="Address"
          defaultValue=""
        />
      </Grid>
    </>
  );
};

export default InfoForm;
