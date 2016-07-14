import React, { PropTypes } from 'react';
import List from './List.jsx';

const propTypes = {
  lists: PropTypes.array,
  removeList: PropTypes.func,
  addItem: PropTypes.func,
  changeItemName: PropTypes.func,
  itemName: PropTypes.string,
};

export default function Lists({ lists, removeList, addItem, changeItemName, itemName }) {
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
            />
          )
        }
      </ul>
    </div>
  );
}

Lists.propTypes = propTypes;

