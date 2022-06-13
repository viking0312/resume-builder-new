import { Grid, TextField } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const InfoForm = (props) => {
  const { values, setValues, setNextDisabled } = props;
  const [formError, setFormError] = React.useState({
    name: {
      isErrored: false,
      errorMessage: "",
    },
    email: {
      isErrored: false,
      errorMessage: "",
    },
    contactNumber: {
      isErrored: false,
      errorMessage: "",
    },
    address: {
      isErrored: false,
      errorMessage: "",
    },
  });

  var isErrored =
    formError.name.isErrored ||
    formError.email.isErrored ||
    formError.contactNumber.isErrored ||
    formError.address.isErrored;

  console.log("isErroredd", isErrored);

  var localVal = { ...values };

  //disable-enable logic for next button
  if (
    localVal.name !== "" &&
    localVal.contantNumber !== "" &&
    localVal.email !== "" &&
    localVal.address !== "" &&
    !isErrored
  ) {
    setNextDisabled(false);
  } else {
    setNextDisabled(true);
  }

  const setNameValue = (e) => {
    var val = e.target.value;
    setValues({ ...values, name: val });
    localVal = { ...values, name: val };
    if (!val) {
      setFormError({
        ...formError,
        name: {
          isErrored: true,
          errorMessage: "Invalid name",
        },
      });
    } else {
      setFormError({
        ...formError,
        name: {
          isErrored: false,
          errorMessage: "",
        },
      });
    }
  };

  const setEmailValue = (e) => {
    var val = e.target.value;
    setValues({ ...values, email: val });
    localVal = { ...values, email: val };

    if (val) {
      if (
        val
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        setFormError({
          ...formError,
          email: {
            isErrored: false,
            errorMessage: "",
          },
        });
      } else {
        setFormError({
          ...formError,
          email: {
            isErrored: true,
            errorMessage: "Invalid email",
          },
        });
      }
    } else {
      setFormError({
        ...formError,
        email: {
          isErrored: true,
          errorMessage: "Invalid email",
        },
      });
    }
  };

  const setAddressValue = (e) => {
    var val = e.target.value;
    setValues({ ...values, address: val });
    localVal = { ...values, address: val };

    if (!val) {
      setFormError({
        ...formError,
        address: {
          isErrored: true,
          errorMessage: "Invalid address",
        },
      });
    } else {
      setFormError({
        ...formError,
        address: {
          isErrored: false,
          errorMessage: "",
        },
      });
    }
  };

  const setContactNumberValue = (e) => {
    var val = e.target.value;
    setValues({ ...values, contantNumber: val });
    localVal = { ...values, contantNumber: val };

    if (val) {
      if (val.match(/^[1-9]+[0-9]*$/) && val.length === 10) {
        setFormError({
          ...formError,
          contactNumber: {
            isErrored: false,
            errorMessage: "",
          },
        });
      } else {
        setFormError({
          ...formError,
          contactNumber: {
            isErrored: true,
            errorMessage: "Invalid contact number",
          },
        });
      }
    } else {
      setFormError({
        ...formError,
        contactNumber: {
          isErrored: true,
          errorMessage: "Invalid contact number",
        },
      });
    }
  };
  return (
    <>
      <Grid item>
        <TextField
          required
          error={formError.name.isErrored}
          id="outlined-required"
          label="Name"
          type="text"
          onChange={(e) => setNameValue(e)}
          defaultValue=""
          helperText={formError.name.errorMessage}
        />
      </Grid>
      <Grid item>
        <TextField
          required
          error={formError.contactNumber.isErrored}
          id="outlined-required"
          label="Contact number"
          type="tel"
          onChange={(e) => setContactNumberValue(e)}
          defaultValue=""
          helperText={formError.contactNumber.errorMessage}
        />
      </Grid>
      <Grid item>
        <TextField
          required
          error={formError.email.isErrored}
          type="email"
          id="outlined-required"
          label="Email ID"
          onChange={(e) => setEmailValue(e)}
          defaultValue=""
          helperText={formError.email.errorMessage}
        />
      </Grid>
      <Grid item>
        <TextField
          required
          error={formError.address.isErrored}
          type="text"
          id="outlined-required"
          label="Address"
          onChange={(e) => setAddressValue(e)}
          defaultValue=""
          helperText={formError.address.errorMessage}
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
