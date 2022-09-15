import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'counter',
  initialState: {
    displayed: false,
  },
  reducers: {
    display: (state) => {
      state.displayed = true;
    },
    hide: (state) => {
      state.displayed = false;
    },
  },
});

export const { display, hide } = modalSlice.actions;
export default modalSlice.reducer;
