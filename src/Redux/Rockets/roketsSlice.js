import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/rockets';

const rockets = [];

export const fetchRockets = createAsyncThunk('rocket/fetch', async () => {
  const response = await axios.get(URL);
  if (response.data) {
    return response.data;
  }
  return [];
});

const rocketSlice = createSlice({
  name: 'rocket',
  initialState: rockets,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const newState = state;
      Object.entries(action.payload).forEach((element) => {
        newState.push({
          id: element[1].id,
          name: element[1].rocket_name,
          description: element[1].description,
          flickr_images: element[1].flickr_images[0],
          reserved: false,
        });
      });
      return newState;
    });
  },
});

export default rocketSlice.reducer;
