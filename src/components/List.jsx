import React, { PropTypes } from 'react';
import Product from './Products.jsx';

const propTypes = {
  list: PropTypes.object,
  removeList: PropTypes.func,
};

export default function List({ list, removeList }) {
  return (
    <li className="list-elem">
      {list.name}
      <input type="text"/>
      <Product />
      <button
        onClick={() => removeList(list.id)}
      >
        x
      </button>
    </li>

  );
}

List.propTypes = propTypes;
