import { combineReducers } from "redux";
import decksReducer from "./decksReducer.js";
import notesReducer from "./notesReducer.js";
import versesReducer from "./versesReducer.js";
import tagsReducer from "./tagsReducer.js";
import usersReducer from "./usersReducer.js";
import cardsReducer from "./cardsReducer.js";
import currentSelectionReducer from "./currentSelectionReducer.js";

export default combineReducers({
  users: usersReducer,
  cards: cardsReducer,
  verses: versesReducer,
  decks: decksReducer,
  notes: notesReducer,
  tags: tagsReducer,
  selected: currentSelectionReducer
});
