import { configureStore } from '@reduxjs/toolkit';
import animalsReducer from './slice/animalSlice';
export const store = configureStore({ reducer:{ animals: animalsReducer } });