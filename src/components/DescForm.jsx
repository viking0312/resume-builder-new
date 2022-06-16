import React from "react";
import { Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";

const DescForm = (props) => {
  const { values, setValues, setNextDisabled } = props;
  if(values.description == "" || values.description.length < 20){
    setNextDisabled(true);
  }else{
    setNextDisabled(false);
  }
  const setDescValue = (e) => {
    console.log(e);
    var val = e.target.value;
    setValues({ ...values, description: val });
  }
  return (
    <>
      <Grid item 
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}>
        <TextField
          required
          //error={formError.description.isErrored}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          onChange={(e) => setDescValue(e)}
          defaultValue=""
          style={ {width: "500px"}}
          //helperText={formError.description.errorMessage}
        />
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
