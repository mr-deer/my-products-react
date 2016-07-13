import uuid from 'uuid';
import _ from 'lodash';
import { ADD_LIST, REMOVE_LIST } from '../actions/lists.js';

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
    case REMOVE_LIST: {
      const index = _.findIndex([...state.lists], (list) => (
        list.id === action.payload
      ));

      return Object.assign({}, state, {
        lists: [
          ...state.lists.slice(0, index),
          ...state.lists.slice(index + 1),
        ],
      });
    }

    default:
      return state;
  }
};

export default lists;
