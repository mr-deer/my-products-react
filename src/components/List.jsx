import React, { PropTypes } from 'react';

const propTypes = {
  list: PropTypes.object,
  removeList: PropTypes.func,
};

export default function List({ list, removeList }) {
  return (
    <li>
      {list.name}
      <button
        onClick={() => removeList(list.id)}
      >
        x
      </button>
    </li>

  );
}

List.propTypes = propTypes;
