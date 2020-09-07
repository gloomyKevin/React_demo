import { createStore } from 'redux';
// const redux = require('redux')
import reducer from './reducer';

const store = createStore(reducer);

export default store;
