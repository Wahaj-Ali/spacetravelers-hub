import { combineReducers, configureStore } from '@reduxjs/toolkit';
import roketsSlice from './Rockets/roketsSlice';

const reducer = combineReducers({
  rockets: roketsSlice,
});

const store = configureStore({
  reducer,
});

export default store;
