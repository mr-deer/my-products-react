import uuid from 'uuid';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const BUY_ITEM = 'BUY_ITEM';
export const CHANGE_ITEM_AMOUNT = 'CHANGE_ITEM_VALUE';

export function addItem(listId, name, amount = '') {
  return {
    type: ADD_ITEM,
    payload: {
      listId,
      id: uuid.v4(),
      name,
      amount,
      checked: false,
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

export function buyItem(listId, itemId) {
  return {
    type: BUY_ITEM,
    payload: {
      listId,
      itemId,
    },
  };
}

export function changeItemAmount(listId, itemId, amount = '') {
  return {
    type: CHANGE_ITEM_AMOUNT,
    payload: {
      listId,
      itemId,
      amount,
    },
  };
}
