import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

const pages = ["Templates", "Take a tour"];

const App = () => {
  return (
    <AppBar position="fixed">
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
  );
};

export default App;
