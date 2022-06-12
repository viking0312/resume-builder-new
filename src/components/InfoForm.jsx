import { Grid, TextField } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const InfoForm = (props) => {
  const { values, setValues, setNextDisabled } = props;

  const handleValidation = () => {
    console.log("maulik", values);
    if (
      values.name !== "" &&
      values.contantNumber !== "" &&
      values.email !== "" &&
      values.address !== "" &&
      typeof values.contantNumber == "number"
    ) {
      setNextDisabled(false);
    }
  };

  const setNameValue = (e) => {
    setValues({ ...values, name: e.target.value });
    handleValidation();
  };

  const setEmailValue = (e) => {
    setValues({ ...values, email: e.target.value });
    handleValidation();
  };

  const setAddressValue = (e) => {
    setValues({ ...values, address: e.target.value });
    handleValidation();
  };

  const setContactNumberValue = (e) => {
    setValues({ ...values, contantNumber: e.target.value });
    handleValidation();
  };
  return (
    <>
      <Grid item>
        <TextField
          required
          id="outlined-required"
          label="Name"
          type="text"
          onChange={(e) => setNameValue(e)}
          defaultValue=""
        />
      </Grid>
      <Grid item>
        <TextField
          required
          id="outlined-required"
          label="Contact number"
          type="tel"
          onChange={(e) => setContactNumberValue(e)}
          defaultValue=""
        />
      </Grid>
      <Grid item>
        <TextField
          required
          type="email"
          id="outlined-required"
          label="Email ID"
          onChange={(e) => setEmailValue(e)}
          defaultValue=""
        />
      </Grid>
      <Grid item>
        <TextField
          required
          type="text"
          id="outlined-required"
          label="Address"
          onChange={(e) => setAddressValue(e)}
          defaultValue=""
        />
      </Grid>
    </>
  );
};

InfoForm.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
  setNextDisabled: PropTypes.func,
};

export default InfoForm;
