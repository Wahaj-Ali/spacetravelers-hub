import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionsSlice from './Missions/missionsSlice';

const reducer = combineReducers({
  missions: missionsSlice,
});

const store = configureStore({
  reducer,
});

export default store;
