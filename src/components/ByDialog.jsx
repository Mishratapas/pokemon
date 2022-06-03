import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import "./First.css";

const ByDialog = () => {
  return (
    <div>
      <Dialog
        open="true"
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle
          style={{
            color: "rgb(229, 55, 55)",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Fill This Form
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{}}>
            We'll use this info to dominate the poke world! Muhahahahah
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ByDialog;
