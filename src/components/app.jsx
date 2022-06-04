import * as React from "react";
import { useState } from "react";
import Header from "./Header";
import Home from "./Home";

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

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PreviewResume from "./preview-resume";

const pages = ["Templates", "Take a tour"];

const handleLogin = () => {
  alert("logged in");
};

const handleWether = () => {};

const App = () => {
  console.log("render");
  const [comp, setComp] = useState("news");

  const [login, setLogin] = useState();
  const handleCallback = (compName) => {
    setComp(compName);
  };
  return (
    <div>
      <Header handle={handleCallback}></Header>
      <Home info={comp}></Home>

      <AppBar position="relative">
        <Toolbar>
          <Typography varient="h6" component="div">
            Resume Builder
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Menu>
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: {
              lg: "50%",
            },
          }}
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion disabled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Disabled Accordion</Typography>
            </AccordionSummary>
          </Accordion>
        </Box>
        <PreviewResume height="877" width="620" />
      </Box>
    </div>
  );
};

export default App;
