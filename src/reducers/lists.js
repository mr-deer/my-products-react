import uuid from 'uuid';
import _ from 'lodash';
import { ADD_ITEM, REMOVE_ITEM } from '../actions/items.js';
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
            items: [],
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
    case ADD_ITEM: {
      const index = _.findIndex([...state.lists], (list) => (
        list.id === action.payload.id
      ));

      return Object.assign({}, state, {
        lists: [
          ...state.lists.slice(0, index),
          {
            id: state.lists[index].id,
            name: state.lists[index].name,
            items: [
              ...state.lists[index].items,
              {
                id: uuid.v1(),
                name: action.payload.name,
                checked: false,
              },
            ],
          },
          ...state.lists.slice(index + 1),
        ],
      });
    }
    case REMOVE_ITEM: {
      const listIndex = _.findIndex([...state.lists], (list) => (
        list.id === action.payload.listId
      ));
      const itemIndex = _.findIndex([...state.lists[listIndex].items], (item) => (
        item.id === action.payload.itemId
      ));
      return Object.assign({}, state, {
        lists: [
          ...state.lists.slice(0, listIndex),
          {
            id: state.lists[listIndex].id,
            name: state.lists[listIndex].name,
            items: [
              ...state.lists[listIndex].items.slice(0, itemIndex),
              ...state.lists[listIndex].items.slice(itemIndex + 1),
            ],
          },
          ...state.lists.slice(listIndex + 1),
        ],
      });
    }

    default:
      return state;
  }
};

export default lists;
