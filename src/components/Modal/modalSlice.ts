import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from 'src/stores/global';

interface ModalState {
  displayed: boolean;
  id: string | null;
}

const initialState: ModalState = {
  displayed: false,
  id: null,
};

export const modalSlice = createSlice({
  name: 'modalDisplay',
  initialState,
  reducers: {
    display: (state, { payload }: PayloadAction<string>) => {
      state.displayed = true;
      state.id = payload;
    },
    hide: (state) => {
      state.displayed = false;
    },
  },
});

export const { display, hide } = modalSlice.actions;
export const selectModalDisplay = (state: RootState) => state.modal.displayed;
export const selectModalId = (state: RootState) => state.modal.id;
export default modalSlice.reducer;
