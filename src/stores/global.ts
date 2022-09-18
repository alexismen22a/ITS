import { configureStore } from '@reduxjs/toolkit';

import modalReducer from 'src/components/Modal/modalSlice';
import audioOptionsReducer from 'src/components/Modal/ModalAddBtn/audioOptionsSlice';
import imageOptionSlice from 'src/components/Modal/ModalAddBtn/imageOptionSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    audioOptions: audioOptionsReducer,
    imageOptions: imageOptionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
