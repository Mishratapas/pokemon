import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  modalItem: {},
  quantity: 0,
  bag: 0,
  cost: 0,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalItem: (state, action) => {
      state.modalItem = action.payload;
    },
    sliderQuantity: (state, action) => (state.quantity = action.payload),
  },
});

export const {modalItem, sliderQuantity} = modalSlice.actions;
export default modalSlice.reducer;
