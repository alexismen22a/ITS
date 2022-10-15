import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from 'src/stores/global';
import type { Buttons, Button } from 'src/types';

import { buttons } from 'src/data/fakeDataBase';

interface ModalState {
  store: Buttons;
}

const initialState: ModalState = {
  store: buttons,
};

export const audioButtonsSlice = createSlice({
  name: 'modalDisplay',
  initialState,
  reducers: {
    addButton: (state, { payload }: PayloadAction<Button>) => {
      state.store.push(payload);
    },
    deleteButton: (state, { payload }: PayloadAction<string>) => {
      state.store = state.store.filter((btn) => btn.id !== payload);
    },
  },
});

export const { addButton, deleteButton } = audioButtonsSlice.actions;
export const selectButtons = (state: RootState) => state.buttons.store;
export default audioButtonsSlice.reducer;
