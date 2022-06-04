import { Box, Paper } from "@mui/material";

const PreviewResume = (props) => {
  console.log(props.height);
  return (
    <Box
      sx={{
        height: {
          lg: props.height,
        },
        width: {
          lg: props.width,
        },
        mx: "auto",
      }}
    >
      <Paper elevation={3}>
        Hello dkjsadkjsahddddddddddddddddddddddddddddddddd
        sakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
      </Paper>
    </Box>
  );
};

export default PreviewResume;
