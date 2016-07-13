import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import lists from './lists.js';

export default combineReducers({
  lists,
  routing,
});
