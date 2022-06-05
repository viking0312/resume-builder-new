import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Box
      sx={{
        height: "100%",
      }}
    >
      <CssBaseline />
      <App />
    </Box>
  </>
);
