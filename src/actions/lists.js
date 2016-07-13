export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

export function addList(name) {
  return {
    type: ADD_LIST,
    payload: name,
  };
}

export function removeList(id) {
  return {
    type: REMOVE_LIST,
    payload: id,
  };
}
