import * as actions from "../actionTypes";
export default (notes = [], action) => {
  switch (action.type) {
    case actions.ADD_NOTE:
      return [...notes, action.payload];

    case actions.UPDATE_NOTE:
      return notes.map((note) =>
        note._id === action.payload.id ? action.payload : note
      );

    case actions.DELETE_NOTE:
      return notes.filter((note) => note.id !== action.payload);
    default:
      return notes;
  }
};
