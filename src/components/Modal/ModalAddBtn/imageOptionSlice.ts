import { createSlice } from '@reduxjs/toolkit';

export const imageOptionsSlice = createSlice({
  name: 'imageOptions',
  initialState: {
    value: '',
  },
  reducers: {
    setGallery: (state) => {
      state.value = 'gallery';
    },
    setImport: (state) => {
      state.value = 'import';
    },
    setNone: (state) => {
      state.value = 'none';
    },
  },
});

export const { setGallery, setImport, setNone } = imageOptionsSlice.actions;
export default imageOptionsSlice.reducer;
