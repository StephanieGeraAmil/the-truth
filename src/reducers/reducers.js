import {combineReducers} from 'redux';

import versesReducer  from './versesReducer.js'

export default combineReducers({ verses:versesReducer });