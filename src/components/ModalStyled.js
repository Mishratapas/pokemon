import {Dialog, Switch} from "@mui/material";
import styled from "styled-components";

export const ModalHeadingContainer = styled.div`
  width: 244px;
  height: 38px;
  margin-left: 118px;
  text-align: center;
  font: normal normal bold 32px/38px Roboto;
  letter-spacing: 0px;
  color: #fe5454;
  opacity: 1;
`;

export const ModalHeading = styled.h1`
  text-align: center;
  font: normal normal bold 32px/38px "Roboto";
  letter-spacing: 0px;
  color: rgba(254, 84, 84, 1);
  opacity: 1;
`;

export const ModalSliderContainer = styled.div`
  margin-left: 80px;
  margin-top: 150px;
  width: 328px;
  height: 80px;
`;

export const SelectQuantity = styled.h1`
  font: normal normal normal 14px/17px Roboto;
  letter-spacing: 0.46px;
  color: #000000de;
  opacity: 1;
`;

export const Bag = styled.p`
  font: normal normal normal 16px/19px Roboto;
  letter-spacing: 0.15px;
  color: #00000099;
  opacity: 1;
`;

const defaultColor = "#FE5454";

export const Cost = styled.p`
  width: 42px;
  height: 22px;
  font: normal normal bold 18px/22px Roboto;
  letter-spacing: 0px;
  color: #889296;
  opacity: 1;
`;

export const Price = styled.p`
  width: 21px;
  height: 22px;
  font: normal normal bold 18px/22px Roboto;
  letter-spacing: 0px;
  color: #393b3b;
  opacity: 1;
`;

export const ModalButton = styled.button`
  width: 200px;
  height: 36px;
  background: #fe5454 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 3px #00000033;
  border-radius: 4px;
  opacity: 1;
  border-style: none;
  color: #ffffff;
  cursor: pointer;
`;

export const ModalSwitch = styled(Switch)(() => ({
  "& .MuiSwitch-switchBase.Mui-checked": {color: defaultColor},
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: defaultColor,
  },
}));

export const MyDialog = styled(Dialog)(() => ({
  "& .MuiDialog-paperScrollBody": {
    verticalAlign: "top",
    alignItems: "flex-start",
  },
}));

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalText = styled.p`
  width: 244px;
  height: 38px;
  font: normal normal bold 32px/38px Roboto;
  letter-spacing: 0px;
  color: #fe5454;
  opacity: 1;
`;
