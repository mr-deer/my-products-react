import React, { PropTypes } from 'react';

const propTypes = {
  list: PropTypes.object,
};

export default function List({ list }) {
  return (
    <li>
      {
        list.name
      }
    </li>
  );
}

List.propTypes = propTypes;
