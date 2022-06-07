import {ModalButton} from "../ModalStyled";

const Button = () => {
  const handleClick = () => {
    window.alert("Hello");
  };
  return <ModalButton onClick={handleClick}>ADD TO CART</ModalButton>;
};

export default Button;
