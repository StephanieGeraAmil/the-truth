import * as actions from "../actionTypes";
export default (tag = [], action) => {
  switch (action.type) {
    case actions.CREATE_TAG:
      return [...tag, action.payload];

    case actions.UPDATE_TAG:
      return tag.map((tag) =>
        tag._id === action.payload._id ? action.payload : tag
      );

    case actions.DELETE_TAG:
      return tag.filter((tag) => tag._id !== action.payload);

    case actions.GET_VERSES_OF_TAG:
      return action.payload;
    case actions.ADD_TAG_VERSE:
      return action.payload;
    case actions.DELETE_TAG_VERSE:
      return action.payload;

    default:
      return tag;
  }
};

// router.get('/verse_tag/:id', tagsController.get_verses_of_tag);

// router.patch('/verse_tag/:id', tagsController.add_tag_verse);
// router.delete('/verse_tag/:id', tagsController.delete_tag_verse);
