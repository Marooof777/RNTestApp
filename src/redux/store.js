// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './placesSlice';

const store = configureStore({
  reducer: {
    places: placesReducer,
  },
});

export default store;
