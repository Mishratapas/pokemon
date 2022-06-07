import {createContext, useState} from "react";

const ModalContext = createContext();

export const ModalProvider = ({children}) => {
  const [region, setRegion] = useState("");
  const regionSet = () => {};

  const [value, setValue] = useState([]);
  const addToCart = (name, price) => {
    setValue((prevState) => [...prevState, {name, price}]);
  };

  return (
    <ModalContext.Provider value={(addToCart, region, regionSet)}>
      {children}{" "}
    </ModalContext.Provider>
  );
};

export default ModalContext;
