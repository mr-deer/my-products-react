import { combineReducers } from 'redux';
import _ from 'lodash';
import { ADD_LIST, REMOVE_LIST } from '../actions/lists.js';
import { ADD_ITEM, REMOVE_ITEM, BUY_ITEM, CHANGE_ITEM_AMOUNT } from '../actions/items.js';

function list(state = {}, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload,
        ],
      };
    case REMOVE_ITEM: {
      const index = _.findIndex(state.items, ((item) =>
        item.id === action.payload.itemId
      ));
      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1),
        ],
      };
    }
    case BUY_ITEM: {
      const index = _.findIndex(state.items, ((item) =>
        item.id === action.payload.itemId
      ));
      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          {
            ...state.items[index],
            checked: !state.items[index].checked,
          },
          ...state.items.slice(index + 1),
        ],
      };
    }
    case CHANGE_ITEM_AMOUNT: {
      const index = _.findIndex(state.items, ((item) =>
        item.id === action.payload.itemId
      ));
      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          {
            ...state.items[index],
            amount: action.payload.amount,
          },
          ...state.items.slice(index + 1),
        ],
      };
    }
    default:
      return state;
  }
}

function byIds(
  state = {}, action) {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
          items: [],
        },
      };
    case ADD_ITEM:
    case REMOVE_ITEM:
      return {
        ...state,
        [action.payload.listId]: list(state[action.payload.listId], action),
      };
    case CHANGE_ITEM_AMOUNT:
    case BUY_ITEM:
      return {
        ...state,
        [action.payload.listId]: list(state[action.payload.listId], action),
      };
    default:
      return state;
  }
}

function ids(state = [], action) {
  switch (action.type) {
    case ADD_LIST:
      return [
        ...state,
        action.payload.id,
      ];
    case REMOVE_LIST: {
      const index = _.indexOf(state, action.payload);

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }
    default:
      return state;
  }
}

export default combineReducers({
  byIds,
  ids,
});
