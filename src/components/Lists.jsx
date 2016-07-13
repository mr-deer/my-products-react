import React, { PropTypes } from 'react';
import List from './List.jsx';

const propTypes = {
  lists: PropTypes.array,
};

export default function Lists({ lists }) {
  console.log(lists, 'propsListsComponent');
  return (
    <div>
      <h1>Lists</h1>
      <ul>
        {
          lists.map((list) =>
            <List list={list} key={lists.id} />
          )
        }
      </ul>
    </div>
  );
}

Lists.propTypes = propTypes;

