import { Alert, Snackbar } from "@mui/material";
import React from "react";

const Snack = ({ isOpen, handleClose }) => {
  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      autoHideDuration={3000}
      message="Note archived">
      <Alert severity="success">item added to cart</Alert>
    </Snackbar>
  );
};

export default Snack;
