import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import lists from './lists.js';

export default combineReducers({
  lists,
  routing,
});

export function getLists(state) {
  return state.lists;
}

export function getIds(state) {
  return state.lists.ids;
}

export function getByIds(state) {
  return state.lists.byIds;
}
