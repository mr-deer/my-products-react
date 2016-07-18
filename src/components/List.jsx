import React, { Component, PropTypes } from 'react';
import Item from '../components/Item.jsx';

const propTypes = {
  list: PropTypes.object,
  removeList: PropTypes.func,
  addItem: PropTypes.func,
  removeItem: PropTypes.func,
  buyItem: PropTypes.func,
};

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      amount: '',
    };

    this.changeName = this.changeName.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  changeName(e) {
    this.setState({ name: e.target.value });
  }

  changeAmount(e) {
    this.setState({ amount: e.target.value });
  }

  addItem(e) {
    e.preventDefault();

    const { list, addItem } = this.props;
    addItem(list.id, this.state.name, this.state.amount);

    this.setState({
      name: '',
      amount: '',
    });
  }

  render() {
    const {
      list,
      removeList,
      removeItem,
      buyItem,
    } = this.props;

    return (
      <li className="list-elem">

        <h3>{list.name}</h3>

        {
          list.items.map((item) =>
            <Item
              name={item.name}
              amount={item.amount}
              key={item.id}
              removeItem={removeItem}
              listId={list.id}
              itemId={item.id}
              buyItem={buyItem}
              checked={item.checked}
            />
          )
        }

        <form onSubmit={this.addItem}>
          <input
            className="itemName-input"
            type="text"
            placeholder="itemName"
            onChange={this.changeName}
            value={this.state.name}
          />
          <input
            className="itemAmount-input"
            type="text"
            onChange={this.changeAmount}
            placeholder="$"
            value={this.state.amount}
          />
          <button>add</button>
        </form>

        <button className="del-btn" onClick={() => removeList(list.id)}>x</button>
      </li>

    );
  }
}

List.propTypes = propTypes;
