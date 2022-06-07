import * as React from "react";
import { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Http from "./Http";
import Form from "./Form";
import defaultSections from "./data/sections";

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
  const [progress, setProgress] = useState(0);
  const [sections, setSections] = useState(defaultSections);

  const handleProgress = (newProgress, newSections) => {
    console.log("new sections ", newSections);
    setProgress(newProgress);
    setSections(newSections);
  };

  var currentPage = (
    <Home sections={sections} handleProgress={handleProgress}></Home>
  );

  switch (progress) {
    case 1:
      currentPage = <Form sections={sections}></Form>;
      break;

    default:
      currentPage = (
        <Home sections={sections} handleProgress={handleProgress}></Home>
      );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>{currentPage}</Box>
      </ThemeProvider>
    </>
  );
};

export default App;
