import {Chip, Grid} from "@mui/material";
import React from "react";

const AllChip = ({setBallType, ballValue, sliderValue, checked}) => {
  const handleDelete = () => {
    console.log("deleted");
  };
  return (
    <Grid
      style={{display: "flex", alignItems: "center", justifyContent: "center"}}
    >
      <Chip label={sliderValue} onDelete={handleDelete} />
    </Grid>
  );
};

export default AllChip;
