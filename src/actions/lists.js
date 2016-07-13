export const ADD_LIST = 'ADD_LIST';

export function addList(name) {
  return {
    type: ADD_LIST,
    payload: name,
  };
}
