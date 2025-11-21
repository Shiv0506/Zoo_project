import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AnimalsList from './components/AnimalsList';
export default function App(){ return(<Provider store={store}><AnimalsList/></Provider>);}