import {combineReducers} from 'redux';
import decksReducer from './decksReducer.js';
import notesReducer from './notesReducer.js';
import versesReducer  from './versesReducer.js'

export default combineReducers({ verses:versesReducer, decks: decksReducer, notes: notesReducer });