import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Paper,
} from "@mui/material";
import AllChip from "./AllChip";

import Form from "./Form";
import useByDialog from "./modal/ByDialog";
import ByDialog from "./modal/ByDialog";
import {Cost, ModalButton, Price} from "./ModalStyled";
import RangeSlider from "./RangeSlider";
import {
  Wewill,
  Heading,
  HeadingContainer,
  WewillContainer,
  TextInput,
  Container,
  CodeName,
  Slider,
  Howfar,
} from "./styled";

import "./styles.css";

const Background = () => {
  const {ballType, price, ballValue, sliderValue, checked, render} =
    useByDialog();

  return (
    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Paper className="card" elevation={10} sx={{borderRadius: "16px"}}>
        <HeadingContainer>
          <Heading>Fill This Form</Heading>
        </HeadingContainer>
        <WewillContainer>
          <Wewill>
            We'll use this info to dominate the poke world! Muhahahahah
          </Wewill>
        </WewillContainer>
        <Container>
          <TextInput>
            <FormControl fullWidth style={{marginTop: "10px"}}>
              <InputLabel htmlFor="my-input" style={{color: "#FE5454"}}>
                Full Name
              </InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                disableUnderline="true"
                style={{marginLeft: "16px"}}
              />
              <FormHelperText className="weknowText" style={{color: "#fe5454"}}>
                We know that's not your name!!
              </FormHelperText>
            </FormControl>
          </TextInput>
          <CodeName className="codename">
            <Input
              disableUnderline="true"
              placeholder="Code Name"
              className="codeNameText"
            />
          </CodeName>
          <Slider>
            <RangeSlider valueLabelDisplay="on" defaultValue={20} />
          </Slider>
          <Grid style={{marginTop: "-20px"}}>
            <Howfar
              style={{fontSize: "13px", lineHeight: "17px", fontWeight: 200}}
            >
              How far is your nearest pokemon center? (In KMs)
            </Howfar>
          </Grid>
          <Grid className="dropDown">
            <Form />
          </Grid>
          <Grid className="modal">{render}</Grid>
          <Grid>
            <AllChip {...{ballType, ballValue, sliderValue, checked}} />
          </Grid>
          <Grid className="firstBag">
            <Grid>
              <Cost>Total Cost:</Cost>
            </Grid>
            <Price>${price}</Price>
          </Grid>
          <Grid
            style={{
              marginTop: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ModalButton>START MY JOURNEY</ModalButton>
          </Grid>
        </Container>
      </Paper>
    </Box>
  );
};

export default Background;
