import { createStore } from 'redux';
// const redux = require('redux')
import reducer from './reducer.js';

const store = createStore(reducer);

export default store;
