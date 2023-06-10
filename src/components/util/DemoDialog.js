import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

export const MuiDialog = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton
        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
        aria-label={"Enlarge Image"}
        onClick={() => setOpen(true)}
      >
        <ZoomInIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogContent>
          <img src={props.imgUrl} alt="" style={{ width: "100%" }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
