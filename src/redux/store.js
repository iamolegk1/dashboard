import { configureStore } from '@reduxjs/toolkit';

import profileReducer from './features/profileSlice.js.jsx';

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;
