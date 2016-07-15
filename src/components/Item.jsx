import React, { PropTypes } from 'react';

const propTypes = {
  name: PropTypes.string,
  removeItem: PropTypes.func,
  listId: PropTypes.string,
  itemId: PropTypes.string,
  buyItem: PropTypes.func,
};

function Item({ name, removeItem, listId, itemId, buyItem }) {
  return (
    <div>
      <span
        className="item"
        onClick={() => buyItem(listId, itemId)}
      >
        {name}
      </span>
      <button onClick={() => removeItem(listId, itemId)}>x</button>
    </div>
  );
}

Item.propTypes = propTypes;

export default Item;
