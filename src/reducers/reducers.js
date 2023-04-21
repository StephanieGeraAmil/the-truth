import { combineReducers } from "redux";
import decksReducer from "./decksReducer.js";
import versesReducer from "./versesReducer.js";
import thoughtsReducer from "./thoughtsReducer.js";
import usersReducer from "./usersReducer.js";
import cardsReducer from "./cardsReducer.js";
import currentSelectionReducer from "./currentSelectionReducer.js";

export default combineReducers({
  user: usersReducer,
  cards: cardsReducer,
  verses: versesReducer,
  decks: decksReducer,
  thoughts: thoughtsReducer,
  selected: currentSelectionReducer
});
