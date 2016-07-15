import React, { PropTypes } from 'react';
import Items from '../components/Items.jsx';

const propTypes = {
  list: PropTypes.object,
  removeList: PropTypes.func,
  addItem: PropTypes.func,
  changeName: PropTypes.func,
  changeValue: PropTypes.func,
  name: PropTypes.string,
  amount: PropTypes.string,
  removeItem: PropTypes.func,
  buyItem: PropTypes.func,
};

const preventDefault = f => e => {
  e.preventDefault();
  f(e);
};

export default function List({
    list,
    removeList,
    addItem,
    changeName,
    changeValue,
    name,
    amount,
    removeItem,
    buyItem,
  }) {
  return (
    <li className="list-elem">

      <h3>{list.name}</h3>

      {
        list.items.map((item) =>
          <Items
            name={item.name}
            amount={item.amount}
            key={item.id}
            removeItem={removeItem}
            listId={list.id}
            itemId={item.id}
            buyItem={buyItem}
            checked={item.checked}
          />
        )
      }

      <form onSubmit={preventDefault(() => addItem(list.id, name, amount))}>
        <input
          className="itemName-input"
          type="text"
          placeholder="itemName"
          onChange={changeName}
          value={name}
        />
        <input
          className="itemAmount-input"
          type="text"
          onChange={changeValue}
          placeholder="$"
          value={amount}
        />
        <button>add</button>
      </form>

      <button className="del-btn" onClick={() => removeList(list.id)}>x</button>
    </li>

  );
}

List.propTypes = propTypes;
