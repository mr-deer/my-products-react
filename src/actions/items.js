export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export function addItem(id, name) {
  return {
    type: ADD_ITEM,
    payload: {
      id,
      name,
    },
  };
}

export function removeItem(listId, itemId) {
  return {
    type: REMOVE_ITEM,
    payload: {
      listId,
      itemId,
    },
  };
}
