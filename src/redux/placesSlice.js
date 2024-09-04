// src/redux/placesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  places: [
    { id: 1, name: 'Pyramids of Giza', description: 'Ancient pyramids in Egypt.', image: '', visited: false },
    { id: 2, name: 'Great Wall of China', description: 'Historical wall in China.', image: '', visited: false },
    { id: 3, name: 'Machu Picchu', description: 'Incan citadel in Peru.', image: '', visited: false },
    // Add more places as needed
  ],
  randomPlace: null,
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    toggleVisited: (state, action) => {
      const place = state.places.find((place) => place.id === action.payload);
      if (place) place.visited = !place.visited;
    },
    suggestRandomPlace: (state) => {
      const randomIndex = Math.floor(Math.random() * state.places.length);
      state.randomPlace = state.places[randomIndex];
    },
  },
});

export const { toggleVisited, suggestRandomPlace } = placesSlice.actions;
export default placesSlice.reducer;
