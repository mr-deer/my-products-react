import { combineReducers } from 'redux';
import _ from 'lodash';
import { ADD_LIST, REMOVE_LIST } from '../actions/lists.js';

function list(state = {}, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload,
        ]
      }
  }
}

function byIds(state = {}, action) {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
          items: [],
        }
      }
    case ADD_ITEM:
    case REMOVE_ITEM:
    case EDIT_ITEM:
      return {
        ...state,
        [action.payload.listId]: list(state[action.payload.listId], action)
      }
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
      ]
    case REMOVE_LIST: {
      const index = _.findIndex(state, 'id');

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ]
    }
    default:
      return state;
  }
}

export default combineReducers({

})
