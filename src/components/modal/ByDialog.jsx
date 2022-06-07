import {Grid} from "@material-ui/core";
import {Dialog} from "@mui/material";
import {useMemo, useState} from "react";
import "../styles.css";

import {ChooseandWhat, Wewill, WewillContainer} from "../styled";
import {
  Bag,
  Cost,
  ModalHeading,
  ModalHeadingContainer,
  ModalSliderContainer,
  ModalSwitch,
  Price,
  SelectQuantity,
} from "../ModalStyled";
import useModalDropDown from "../ModalDropDown";

import ModalSlider from "./ModalSlider";
import Button from "./Button";

const useByDialog = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const {render, ballValue, ballType} = useModalDropDown();
  console.log(ballValue);
  console.log(ballType);

  const [sliderValue, setSliderValue] = useState(5);
  const handleSliderValue = (e, value) => {
    e.preventDefault();
    setSliderValue(value);
    console.log(sliderValue);
  };

  const [checked, setChecked] = useState(0);
  const handleSwitch = (e) => {
    e.preventDefault();
    setChecked(2);
  };

  let price = ballValue * sliderValue + checked;

  return {
    price,
    ballValue,
    sliderValue,
    checked,
    render: (
      <>
        <Grid className="twoContent">
          <ChooseandWhat>What do you want to pack?</ChooseandWhat>
          <button className="button2" onClick={(e) => handleOpen(e)}>
            +
          </button>
        </Grid>

        <Dialog
          open={open}
          onClose={handleClose}
          scroll="paper"
          className="newDialog"
          PaperProps={{
            sx: {
              width: "488px",
              height: "659px",
              borderRadius: "16px",
            },
          }}
        >
          <ModalHeadingContainer>
            <ModalHeading>Place Your Order</ModalHeading>
          </ModalHeadingContainer>
          <WewillContainer>
            <Wewill>
              We'll use this info to pack your order! Muhahahahahaha
            </Wewill>
            <Grid className="dropDown">{render}</Grid>
          </WewillContainer>
          <Grid>
            <ModalSliderContainer>
              <ModalSlider
                valueLabelDisplay="on"
                defaultValue={5}
                max={10}
                value={sliderValue}
                onChange={handleSliderValue}
              />
              <SelectQuantity>Select Quantity</SelectQuantity>
            </ModalSliderContainer>
          </Grid>
          <Grid className="modalBag">
            <Bag>I need a bag for that!</Bag>
            <ModalSwitch onChange={handleSwitch} />
          </Grid>
          <Grid className="modalBag">
            <Cost>Cost:</Cost>
            <Price>${price}</Price>
          </Grid>
          <Grid
            style={{
              marginTop: "25px",
              marginLeft: "140px",
            }}
          >
            <Button />
          </Grid>
        </Dialog>
      </>
    ),
  };
};

export default useByDialog;
