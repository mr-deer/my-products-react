import React, { PropTypes } from 'react';
import List from './List.jsx';

const propTypes = {
  lists: PropTypes.array,
};

export default function Lists({ lists }) {
  const newestLists = lists.slice(-7).reverse();

  return (
    <div>
      <h1>Lists</h1>
      <ul>
        {
          newestLists.map((item) =>
            <List list={item} key={item.id} />
          )
        }
      </ul>
    </div>
  );
}

Lists.propTypes = propTypes;

