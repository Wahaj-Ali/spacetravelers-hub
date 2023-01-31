import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  status: 'idle',
  error: null,
};

const FETCH_URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissionData = createAsyncThunk('spacetravelers/missions/FETCH_DATA', async () => {
  const response = await axios.get(FETCH_URL);
  return response.data;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissionData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissionData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = action.payload;
      })
      .addCase(fetchMissionData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default missionsSlice;
