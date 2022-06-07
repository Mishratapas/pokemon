import {Slider} from "@mui/material";
import {styled} from "@mui/system";

const ModalSlider = styled(Slider)({
  color: "#FE5454",
  height: 2,
  "&. MuiSlider-track": {border: "none"},
  "& .MuiSlider-thumb": {
    height: 16,
    width: 16,
    backgroundColor: "#FE5454",
    border: "2px solid currentColor",
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#FE5454",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": {display: "none"},
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
  "&. MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    backgroundColor: "#FE5454",
    borderRadius: "50% 50% 50% 0",
  },
});

export default ModalSlider;
