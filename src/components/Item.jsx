import React, { PropTypes } from 'react';

const propTypes = {
  name: PropTypes.string,
};

function Item({ name }) {
  return (
    <div>
      {name}
    </div>
  );
}

Item.propTypes = propTypes;

export default Item;
