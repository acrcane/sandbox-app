import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenModal: false,
  selectedContact: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpenModal = true;
      state.selectedContact = action.payload;
    },
    closeModal: (state) => {
      state.isOpenModal = false;
      state.selectedContact = null
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer
