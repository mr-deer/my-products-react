import React, { PropTypes } from 'react';
import List from './List.jsx';

const propTypes = {
  lists: PropTypes.array,
  removeList: PropTypes.func,
  addItem: PropTypes.func,
  changeItemName: PropTypes.func,
  changeItemValue: PropTypes.func,
  itemName: PropTypes.string,
  itemAmount: PropTypes.string,
  removeItem: PropTypes.func,
  buyItem: PropTypes.func,
};

export default function Lists({
    lists,
    removeList,
    itemName,
    itemAmount,
    addItem,
    changeItemName,
    changeItemValue,
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
              name={itemName}
              amount={itemAmount}
              addItem={addItem}
              changeName={changeItemName}
              changeValue={changeItemValue}
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

