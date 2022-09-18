import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from 'src/stores/global';

interface ModalState {
  displayed: boolean;
}

const initialState: ModalState = {
  displayed: false,
};

export const modalSlice = createSlice({
  name: 'counter',
  initialState,
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
export const selectModal = (state: RootState) => state.modal.displayed;
export default modalSlice.reducer;
