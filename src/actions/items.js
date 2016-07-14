export const ADD_ITEM = 'ADD_ITEM';

export function addItem(id, name) {
  return {
    type: ADD_ITEM,
    payload: {
      id,
      name,
    },
  };
}
