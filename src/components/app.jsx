import * as React from "react";
import { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Http from "./Http";

import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#009688",
      darker: "#004d40",
    },
    secondary: {
      main: "#ff5722",
      darker: "#bf360c",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

const pages = ["Templates", "Take a tour"];

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <Home></Home>
          <Http></Http>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
