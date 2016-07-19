import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  name: PropTypes.string,
  amount: PropTypes.string,
  removeItem: PropTypes.func,
  listId: PropTypes.string,
  itemId: PropTypes.string,
  buyItem: PropTypes.func,
  checked: PropTypes.bool,
  changeItemAmount: PropTypes.func,
};

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: this.props.amount,
    };

    this.changeAmount = this.changeAmount.bind(this);
  }

  changeAmount(e) {
    const { listId, itemId } = this.props;
    this.setState({ amount: e.target.value });
    this.props.changeItemAmount(listId, itemId, e.target.value);
  }

  render() {
    const {
      name,
      listId,
      removeItem,
      buyItem,
      itemId,
      checked,
      } = this.props;

    return (
      <div className="item-wrapper">
        <span
          className={classNames({
            item: true,
            'item--isChecked': checked,
          })}
          onClick={() => buyItem(listId, itemId)}
        >
         {name}
        </span>

        <span>
          <label>
            <span className="label-input-amount">$</span>
            <input
              className="amount-item-input"
              type="text" placeholder="null"
              onChange={this.changeAmount}
              value={this.state.amount}
            />
          </label>

          <button onClick={() => removeItem(listId, itemId)}>x</button>
        </span>
      </div>
    );
  }
}

Item.propTypes = propTypes;

export default Item;
