import React from "react";
import { Grid, TextareaAutosize } from "@mui/material";
import PropTypes from "prop-types";

const DescForm = (props) => {
  const { values, setValues } = props;
  return (
    <>
      <Grid item>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Minimum 3 rows"
          onChange={(e) =>{ setValues({...values, description: e.target.value})}}
          style={{ width: 200 }}
        />
      </Grid>
    </>
  );
};

DescForm.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
};
export default DescForm;
