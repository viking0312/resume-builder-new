import React from "react";
import { Grid, TextareaAutosize } from "@mui/material";

const DescForm = () => {
  return (
    <>
      <Grid item>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Minimum 3 rows"
          style={{ width: 200 }}
        />
      </Grid>
    </>
  );
};

export default DescForm;
