import React from "react";
import { Grid, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";

const DescForm = (props) => {
  var minCharValue = 20;
  const { values, setValues, setNextDisabled } = props;
  if (values.description == "" || values.description.length < 20) {
    minCharValue = minCharValue - values.description.length;
    setNextDisabled(true);
  } else {
    minCharValue = 0;
    setNextDisabled(false);
  }
  const setDescValue = (e) => {
    var val = e.target.value;
    setValues({ ...values, description: val });
  };
  return (
    <>
      <Grid
        item
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <TextField
          required
          //error={formError.description.isErrored}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          onChange={(e) => setDescValue(e)}
          defaultValue=""
          style={{ width: "500px" }}
          //helperText={formError.description.errorMessage}
        />
        <Typography fontSize={14} fontFamily="-moz-initial" textAlign="right">
          {" "}
          Minimum {minCharValue} more char required
        </Typography>
      </Grid>
    </>
  );
};

DescForm.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
  setNextDisabled: PropTypes.func,
};
export default DescForm;
