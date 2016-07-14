import React, { PropTypes } from 'react';
import Item from './Item.jsx';

const propTypes = {
  name: PropTypes.string,
};

function Items({ name }) {
  return (
    <div className="products">
      <Item name={name} />
    </div>
  );
}

Items.propTypes = propTypes;

export default Items;
