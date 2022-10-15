import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from 'src/stores/global';

interface OptionsState {
  isActive: boolean;
}

const initialState: OptionsState = {
  isActive: false,
};

export const optionsSlice = createSlice({
  name: 'optionsSlice',
  initialState,
  reducers: {
    toggleOptions: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { toggleOptions } = optionsSlice.actions;
export const selectOptions = (state: RootState) => state.generalOptions.isActive;
export default optionsSlice.reducer;
