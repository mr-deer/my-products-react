import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  name: PropTypes.string,
  amount: PropTypes.string,
  removeItem: PropTypes.func,
  listId: PropTypes.string,
  itemId: PropTypes.string,
  buyItem: PropTypes.func,
  checked: PropTypes.bool,
};

function Item({ name, removeItem, listId, itemId, buyItem, checked, amount }) {
  return (
    <div className="item-wrapper">
      <span
        className={classNames({
          item: true,
          'item--isChecked': checked,
        })}
        onClick={() => buyItem(listId, itemId)}
      >
       {name}
      </span>

      <span>
        <label>
          <span className="label-input-amount">$</span>
          <input className="amount-item-input" type="text" placeholder="null" value={amount} />
        </label>

        <button onClick={() => removeItem(listId, itemId)}>x</button>
      </span>
    </div>
  );
}

Item.propTypes = propTypes;

export default Item;
