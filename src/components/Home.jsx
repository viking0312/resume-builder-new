import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Button, Grid } from "@mui/material";
import {
  ArrowForward,
  ArrowForwardIos,
  ArrowForwardIosOutlined,
  ArrowForwardIosRounded,
} from "@mui/icons-material";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CustomizedDialogs from "./CustomizedDialogs";
import { useState } from "react";

const Home = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
              onClick={() => props.handle("wether")}
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
        <CustomizedDialogs open={open} handleClose={handleClose} />
      </Box>
    </>
  );
};

export default Home;
