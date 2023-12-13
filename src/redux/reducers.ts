import { combineReducers } from '@reduxjs/toolkit';
import User from './auth';
import App from './app';
import loadingSlice from './_loading';
const combinedReducer = combineReducers({
  _loading: loadingSlice.reducer,
  [User.slice.name]: User.slice.reducer,
  [App.slice.name]: App.slice.reducer,
});

export default combinedReducer;
