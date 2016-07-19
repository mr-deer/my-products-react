import React, { PropTypes } from 'react';
import List from './List.jsx';

const propTypes = {
  ids: PropTypes.array,
  byIds: PropTypes.object,
  removeList: PropTypes.func,
  addItem: PropTypes.func,
  itemName: PropTypes.string,
  itemAmount: PropTypes.string,
  removeItem: PropTypes.func,
  buyItem: PropTypes.func,
  changeItemAmount: PropTypes.func,
};

export default function Lists({
    ids,
    byIds,
    removeList,
    addItem,
    removeItem,
    buyItem,
    changeItemAmount,
  }) {
  return (
    <div>
      <h1>Lists</h1>
      <ul>
        {
          ids.map((id) =>
            <List
              list={byIds[id]}
              key={id}
              removeList={removeList}
              addItem={addItem}
              removeItem={removeItem}
              buyItem={buyItem}
              changeItemAmount={changeItemAmount}
            />
          )
        }
      </ul>
    </div>
  );
}

Lists.propTypes = propTypes;
