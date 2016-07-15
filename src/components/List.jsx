import React, { PropTypes } from 'react';
import Items from '../components/Items.jsx';

const propTypes = {
  list: PropTypes.object,
  removeList: PropTypes.func,
  addItem: PropTypes.func,
  changeName: PropTypes.func,
  name: PropTypes.string,
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
    name,
    removeItem,
    buyItem,
  }) {
  return (
    <li className="list-elem">

      {list.name}

      <form onSubmit={preventDefault(() => addItem(list.id, name))}>
        <input type="text" onChange={changeName} value={name} />
        <button>add</button>
      </form>

      {
        list.items.map((item) =>
          <Items
            name={item.name}
            key={item.id}
            removeItem={removeItem}
            listId={list.id}
            itemId={item.id}
            buyItem={buyItem}
          />
        )
      }

      <button className="del-btn" onClick={() => removeList(list.id)}>x</button>
    </li>

  );
}

List.propTypes = propTypes;
