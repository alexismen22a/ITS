import { configureStore } from '@reduxjs/toolkit';

import modalReducer from 'src/components/Modal/modalSlice';
import audioOptionsReducer from 'src/components/Modal/ModalAddBtn/audioOptionsSlice';
import imageOptionSlice from 'src/components/Modal/ModalAddBtn/imageOptionSlice';
import generalOptionsSlice from 'src/components/Options/OptionsSlice';
import audioButtonsSlice from 'src/components/AudioButtons/audioButtonsSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    audioOptions: audioOptionsReducer,
    imageOptions: imageOptionSlice,
    generalOptions: generalOptionsSlice,
    buttons: audioButtonsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
