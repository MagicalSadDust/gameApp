import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/levelSlice';

const store = configureStore({
  reducer: rootReducer,
});

export default store;


