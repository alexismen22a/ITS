import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from 'src/stores/global';

interface AudioOptionsState {
  value: 'text' | 'record' | 'import' | null;
}

const initialState: AudioOptionsState = {
  value: null,
};

export const audioOptionsSlice = createSlice({
  name: 'audioOptions',
  initialState,
  reducers: {
    setText: (state) => {
      state.value = 'text';
    },
    setRecord: (state) => {
      state.value = 'record';
    },
    setImport: (state) => {
      state.value = 'import';
    },
  },
});

export const { setText, setRecord, setImport } = audioOptionsSlice.actions;
export const selectAudioOption = (state: RootState) => state.audioOptions.value;
export default audioOptionsSlice.reducer;
