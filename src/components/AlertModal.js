import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

export default function AlertModal({ isOpen, handleClick }) {
  const navigate = useNavigate();

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to cancel?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: "#425f57" }}
            name="cancel"
            onClick={(e) => handleClick(e)}
          >
            No
          </Button>
          <Button
            sx={{ color: "#425f57" }}
            name="okay"
            onClick={(e) => handleClick(e)}
            autoFocus
          >
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
