import React, { PropTypes } from 'react';

const propTypes = {
  name: PropTypes.string,
  removeItem: PropTypes.func,
  listId: PropTypes.string,
  itemId: PropTypes.string,
};

function Item({ name, removeItem, listId, itemId }) {
  return (
    <div>
      {name}

      <button onClick={() => removeItem(listId, itemId)}>x</button>
    </div>
  );
}

Item.propTypes = propTypes;

export default Item;
