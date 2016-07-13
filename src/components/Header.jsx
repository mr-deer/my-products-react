import React, { PropTypes } from 'react';

const preventDefault = f => e => {
  e.preventDefault();
  f(e);
};

export default function Header({ name, addList, changeName }) {
  return (
    <div>
      <div>logo</div>
      <form onSubmit={preventDefault(addList)}>
        <input type="text" onChange={changeName} value={name} />
        <button>Add</button>
      </form>
    </div>
  );
}

Header.propTypes = {
  changeName: PropTypes.func,
  addList: PropTypes.func,
};
