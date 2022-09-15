import { configureStore } from '@reduxjs/toolkit';

import modalReducer from '../components/Modal/modalSlice';

export default configureStore({
  reducer: {
    modal: modalReducer,
  },
});
