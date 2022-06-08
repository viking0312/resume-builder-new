import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const CustomizedDialogs = (props) => {
  const [sections, setSections] = useState(props.sections);

  console.log("sectionssss", sections);

  const handleDelete = (section) => () => {
    console.log(section.key);

    let copy = [...sections];

    var index = copy.indexOf(section);
    copy.splice(index, 1);

    setSections(copy);
  };

  return (
    <BootstrapDialog
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={props.handleClose}
      >
        Please select the sections for the resume
      </BootstrapDialogTitle>

      <DialogContent dividers>
        {sections.map((section) => {
          return (
            <Chip
              key={section}
              label={section}
              variant="outlined"
              onDelete={handleDelete(section)}
            />
          );
        })}
      </DialogContent>

      <DialogActions>
        <Button autoFocus onClick={() => props.handleSave(sections)}>
          Save changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default CustomizedDialogs;
