import Check from "@mui/icons-material/Check";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import * as React from "react";
import DescForm from "./DescForm";
import InfoForm from "./InfoForm";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: theme.palette.primary.main,
  }),
  "& .QontoStepIcon-completedIcon": {
    color: theme.palette.primary.main,
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const Form = (props) => {
  const steps = props.sections;
  const [activeStep, setActiveStep] = React.useState(0);
  const [nextDisabled, setNextDisabled] = React.useState(true);
  const [values, setValues] = React.useState({
    name: "",
    contantNumber: "",
    email: "",
    address: "",
    description: "",
  });

  console.log(values);

  const handlePrevious = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleNext = () => {
    console.log(steps.length, "stepsss");
    if (activeStep + 1 < steps.length) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  var currentForm = <InfoForm></InfoForm>;

  switch (steps[activeStep]) {
    case "Basic information":
      currentForm = (
        <InfoForm
          values={values}
          setValues={setValues}
          setNextDisabled={setNextDisabled}
        ></InfoForm>
      );
      break;

    case "Description":
      currentForm = (
        <DescForm
          values={values}
          setValues={setValues}
          setNextDisabled={setNextDisabled}
        ></DescForm>
      );
      break;

    case "Education":
      break;

    case "Experience":
      break;

    case "Certifications":
      break;

    case "Hobbies":
      break;

    default:
      currentForm = <InfoForm></InfoForm>;
      break;
  }

  return (
    <Box>
      <Stack sx={{ width: "100%" }} spacing={3}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<QontoConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
      <form onSubmit={handleSubmit(values)}>
        <Grid
          container
          direction="column"
          spacing={2}
          alignItems="center"
          sx={{
            mt: 2,
          }}
        >
          {currentForm}{" "}
          <Grid item>
            <Button
              variant="contained"
              onClick={handlePrevious}
              color="secondary"
              sx={{
                mr: 2,
              }}
            >
              Previous
            </Button>
            <Button
              disabled={nextDisabled}
              variant="contained"
              onClick={handleNext}
              color="secondary"
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

Form.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string),
};

export default Form;
