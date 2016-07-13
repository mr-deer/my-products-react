import React, { PropTypes } from 'react';
import List from './List.jsx';

const propTypes = {
  lists: PropTypes.array,
  removeList: PropTypes.func,
};

export default function Lists({ lists, removeList }) {
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
            />
          )
        }
      </ul>
    </div>
  );
}

Lists.propTypes = propTypes;

