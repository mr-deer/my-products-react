import React, { PropTypes } from 'react';

export default function Header({ addList, changeName }) {
  return (
    <div>
      <div>logo</div>
      <input type="text" onChange={changeName} />
      <button onClick={addList}>Add</button>
    </div>
  );
}

Header.propTypes = {
  changeName: PropTypes.func,
  addList: PropTypes.func,
};
