import React, { PropTypes } from 'react';
import Item from './Item.jsx';

const propTypes = {
  name: PropTypes.string,
  amount: PropTypes.string,
  removeItem: PropTypes.func,
  listId: PropTypes.string,
  itemId: PropTypes.string,
  buyItem: PropTypes.func,
  checked: PropTypes.bool,
};

function Items({
    name,
    amount,
    removeItem,
    listId,
    itemId,
    buyItem,
    checked,
  }) {
  return (
    <div>
      <Item
        name={name}
        amount={amount}
        removeItem={removeItem}
        listId={listId}
        itemId={itemId}
        buyItem={buyItem}
        checked={checked}
      />
    </div>
  );
}

Items.propTypes = propTypes;

export default Items;
