import {Dialog, Box, Typography, DialogTitle} from "@mui/material";

const ByBox = () => {
  return (
    <div>
      <Dialog
        opne="true"
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
        <Box width="300px" p={2}>
          <Typography>Fill This Form</Typography>
        </Box>
      </Dialog>
    </div>
  );
};

export default ByBox;
