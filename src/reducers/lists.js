import uuid from 'uuid';
import { ADD_LIST } from '../actions/lists.js';

const initialState = {
  lists: [],
};

const lists = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return Object.assign({}, state, {
        lists: [
          ...state.lists,
          {
            id: uuid.v1(),
            name: action.payload,
          },
        ],
      });
    default:
      return state;
  }
};

export default lists;
