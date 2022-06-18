import React from "react";
import { TextField, Grid } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PropTypes from "prop-types";

const EduForm = (props) => {
  const { values, setValues, setNextDisabled } = props;
  const [formError, setFormError] = React.useState({
    degree: {
      isErrored: false,
      errorMessage: "",
    },
    university: {
      isErrored: false,
      errorMessage: "",
    },
  });

  setNextDisabled(true);

  const setDegreeValue = (e) => {
    var val = e.target.value;
    setValues({ ...values, degree: val });

    if (!val) {
      setFormError({
        ...formError,
        degree: {
          isErrored: true,
          errorMessage: "Invalid degree",
        },
      });
    } else {
      setFormError({
        ...formError,
        degree: {
          isErrored: false,
          errorMessage: "",
        },
      });
    }
  };

  const setUniversityValue = (e) => {
    var val = e.target.value;
    setValues({ ...values, university: val });

    if (!val) {
      setFormError({
        ...formError,
        university: {
          isErrored: true,
          errorMessage: "Invalid university",
        },
      });
    } else {
      setFormError({
        ...formError,
        university: {
          isErrored: false,
          errorMessage: "",
        },
      });
    }
  };

  const setStartdateValue = (val) => {
    console.log(val);
  };

  return (
    <>
      <Grid item>
        <TextField
          required
          error={formError.name.isErrored}
          id="outlined-required"
          label="Degree"
          type="text"
          onChange={(e) => setDegreeValue(e)}
          defaultValue=""
          helperText={formError.degree.errorMessage}
        />
      </Grid>
      <Grid item>
        <TextField
          required
          error={formError.contactNumber.isErrored}
          id="outlined-required"
          label="University/College"
          type="tel"
          onChange={(e) => setUniversityValue(e)}
          defaultValue=""
          helperText={formError.university.errorMessage}
        />
      </Grid>
      <Grid item>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            views={["year"]}
            label="Year only"
            // value={value}
            onChange={(newValue) => {
              setStartdateValue(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} helperText={null} />
            )}
          />
        </LocalizationProvider>
      </Grid>
    </>
  );
};

EduForm.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
  setNextDisabled: PropTypes.func,
};

export default EduForm;
