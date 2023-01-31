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
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const newState = action.payload.map((rocket) => ({
        id: rocket.id,
        name: rocket.rocket_name,
        description: rocket.description,
        flickr_images: rocket.flickr_images,
        reserve: false,
      }));
      state.push(...newState);
    });
  },
});

export default rocketSlice.reducer;
