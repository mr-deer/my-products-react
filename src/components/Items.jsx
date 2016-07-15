import React, { PropTypes } from 'react';
import Item from './Item.jsx';

const propTypes = {
  name: PropTypes.string,
  removeItem: PropTypes.func,
  listId: PropTypes.string,
  itemId: PropTypes.string,
  buyItem: PropTypes.func,
};

function Items({ name, removeItem, listId, itemId, buyItem }) {
  return (
    <div className="products">
      <Item
        name={name}
        removeItem={removeItem}
        listId={listId}
        itemId={itemId}
        buyItem={buyItem}
      />
    </div>
  );
}

Items.propTypes = propTypes;

export default Items;
