import {
  Box,
  Button,
  Card,
  Dialog,
  Grid,
  Hidden,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import "./styles.css";

const Background = () => {
  const paperStyle = {
    width: "488px",
    height: "1181px",
    margin: "50px auto",
    top: "80px",
    left: "439px",
    background: "#FFFFFF",
  };
  return (
    <div className="background">
      <Card style={{...paperStyle, borderRadius: "16px", opacity: 1}}>
        <>
          <div className="heading">
            <Typography className="fill">Fill This Form</Typography>
          </div>
          <div className="content">
            <Typography>
              We'll use this info to dominate the poke world! Muhahahahah
            </Typography>
          </div>
          <div className="input2last">
            <div className="inputText">
              <div className="inside">
                <Typography className="fullNameText">Full Name</Typography>
              </div>
            </div>
          </div>
        </>
      </Card>
    </div>
  );
};

export default Background;
