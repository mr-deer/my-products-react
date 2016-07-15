import React, { PropTypes } from 'react';
import List from './List.jsx';

const propTypes = {
  lists: PropTypes.array,
  removeList: PropTypes.func,
  addItem: PropTypes.func,
  changeItemName: PropTypes.func,
  itemName: PropTypes.string,
  removeItem: PropTypes.func,
  buyItem: PropTypes.func,
};

export default function Lists({
    lists,
    removeList,
    addItem,
    changeItemName,
    itemName,
    removeItem,
    buyItem,
  }) {
  const newestLists = lists.slice(-7).reverse();

  return (
    <div>
      <h1>Lists</h1>
      <ul>
        {
          newestLists.map((item) =>
            <List
              list={item}
              key={item.id}
              removeList={removeList}
              addItem={addItem}
              changeName={changeItemName}
              name={itemName}
              removeItem={removeItem}
              buyItem={buyItem}
            />
          )
        }
      </ul>
    </div>
  );
}

Lists.propTypes = propTypes;

