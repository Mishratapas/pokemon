import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React, {useState} from "react";

function useModalDropDown() {
  const [ballValue, setBallValue] = useState("");
  const [ballType, setBallType] = useState("");

  const handleChange = (e) => {
    setBallValue(e.target.value);
    setBallType(e.traget.tagName);
  };
  return {
    ballValue,
    setBallType,
    render: (
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          className="whatsyour"
          style={{color: "#00000099"}}
        >
          Choose Item
        </InputLabel>
        <Select
          label="What's your starting region?"
          onChange={(e) => handleChange(e)}
        >
          <MenuItem value={5}>Poke Ball</MenuItem>
          <MenuItem value={5}>Great Ball</MenuItem>
          <MenuItem value={10}>Super Potion</MenuItem>
          <MenuItem value={20}>Hyper Potion</MenuItem>
        </Select>
      </FormControl>
    ),
  };
}

export default useModalDropDown;
