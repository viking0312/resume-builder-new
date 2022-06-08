import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const Header = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h1"
          component="div"
          sx={{
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          Welcome to the resume builder
        </Typography>
        <Button
          variant="contained"
          endIcon={<ArrowForward />}
          sx={{
            flexGrow: 1,
          }}
        >
          Get started
        </Button>
      </Box>
    </>
  );
};

export default Header;
