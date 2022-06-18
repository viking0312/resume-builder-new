import React from "react"
import { TextField, Grid } from "@mui/material"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import PropTypes from "prop-types"

const EduForm = (props) => {
  const { values, setValues, setNextDisabled } = props
  const [formError, setFormError] = React.useState({
    degree: {
      isErrored: false,
      errorMessage: "",
    },
    university: {
      isErrored: false,
      errorMessage: "",
    },
    startYear: {
      isErrored: false,
      errorMessage: "",
    },
    endYear: {
      isErrored: false,
      errorMessage: "",
    },
  })

  // React.useEffect(() => {
  //   setValues({ ...values, startYear: 2022, endYear: 2022 })
  // }, [])

  setNextDisabled(true)

  const setDegreeValue = (e) => {
    var val = e.target.value
    setValues({ ...values, degree: val })

    if (!val) {
      setFormError({
        ...formError,
        degree: {
          isErrored: true,
          errorMessage: "Invalid degree",
        },
      })
    } else {
      setFormError({
        ...formError,
        degree: {
          isErrored: false,
          errorMessage: "",
        },
      })
    }
  }

  const setUniversityValue = (e) => {
    var val = e.target.value
    setValues({ ...values, university: val })

    if (!val) {
      setFormError({
        ...formError,
        university: {
          isErrored: true,
          errorMessage: "Invalid university",
        },
      })
    } else {
      setFormError({
        ...formError,
        university: {
          isErrored: false,
          errorMessage: "",
        },
      })
    }
  }

  const setStartYearValue = (val) => {
    console.log(typeof val)
    console.log(val.getYear())
    val = val.getYear() + 1900
    setValues({ ...values, startYear: val })

    if (!val) {
      setFormError({
        ...formError,
        startYear: {
          isErrored: true,
          errorMessage: "Invalid start year",
        },
      })
    } else if (values.endYear && values.endYear < values.startYear) {
      setFormError({
        ...formError,
        startYear: {
          isErrored: true,
          errorMessage: "Start year should be less than End year",
        },
      })
    } else {
      setFormError({
        ...formError,
        startYear: {
          isErrored: false,
          errorMessage: "",
        },
      })
    }
  }

  const setEndYearValue = (val) => {
    val = val.getYear() + 1900
    setValues({ ...values, endYear: val })

    if (!val) {
      setFormError({
        ...formError,
        endYear: {
          isErrored: true,
          errorMessage: "Invalid end year",
        },
      })
    } else if (values.startYear && values.endYear < values.startYear) {
      setFormError({
        ...formError,
        endYear: {
          isErrored: true,
          errorMessage: "Start year should be less than End year",
        },
      })
    } else {
      setFormError({
        ...formError,
        endYear: {
          isErrored: false,
          errorMessage: "",
        },
      })
    }
  }

  return (
    <>
      <Grid item>
        <TextField
          required
          error={formError.degree.isErrored}
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
          error={formError.university.isErrored}
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
            label="Start Year"
            value={values.startYear}
            onChange={(newValue) => {
              setStartYearValue(newValue)
            }}
            renderInput={(params) => (
              <TextField
                error={formError.startYear.isErrored}
                {...params}
                helperText={formError.startYear.errorMessage}
              />
            )}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            views={["year"]}
            label="End Year"
            value={values.endYear}
            onChange={(newValue) => {
              setEndYearValue(newValue)
            }}
            renderInput={(params) => (
              <TextField
                error={formError.endYear.isErrored}
                {...params}
                helperText={formError.endYear.errorMessage}
              />
            )}
          />
        </LocalizationProvider>
      </Grid>
    </>
  )
}

EduForm.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
  setNextDisabled: PropTypes.func,
}

export default EduForm
