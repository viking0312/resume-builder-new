import { ArrowForwardIosOutlined } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CustomizedDialogs from "./CustomizedDialogs";
import PropTypes from "prop-types";

Home.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string),
  handleProgress: PropTypes.func,
};

const Home = (props) => {
  const [open, setOpen] = React.useState(false);
  const [sections, setSections] = React.useState(props.sections);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log("close clicked");
    setOpen(false);
  };

  const handleSave = (newSections) => {
    console.log("save clicked");
    setOpen(false);
    props.handleProgress(1, newSections);
  };

  return (
    <>
      <Box color="secondary">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          bgcolor="primary.darker"
          sx={{
            minHeight: "100vh",
          }}
        >
          <Grid item sx={{}}>
            <Typography
              variant="h1"
              component="div"
              color="whitesmoke"
              sx={{
                pb: 5,
              }}
            >
              Welcome to the resume builder
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIosOutlined />}
              size="large"
              color="secondary"
              onClick={handleClickOpen}
            >
              Get started
            </Button>
          </Grid>
        </Grid>
        <CustomizedDialogs
          open={open}
          handleProgress={props.handleProgress}
          handleClose={handleClose}
          handleSave={handleSave}
          sections={sections}
          setSections={setSections}
        />
      </Box>
    </>
  );
};

export default Home;
