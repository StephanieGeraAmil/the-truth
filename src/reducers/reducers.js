import { combineReducers } from "redux";
import decksReducer from "./decksReducer.js";
import versesReducer from "./versesReducer.js";
import notesReducer from "./notesReducer.js";
import usersReducer from "./usersReducer.js";
import cardsReducer from "./cardsReducer.js";
import currentSelectionReducer from "./currentSelectionReducer.js";

export default combineReducers({
  user: usersReducer,
  cards: cardsReducer,
  verses: versesReducer,
  notes: notesReducer,
  decks: decksReducer,
  selected: currentSelectionReducer
});
