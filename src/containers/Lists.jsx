import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListsComponent from '../components/Lists.jsx';
import { removeList } from '../actions/lists.js';
import { addItem, removeItem, buyItem } from '../actions/items.js';

const propTypes = {
  lists: PropTypes.object,
  actions: PropTypes.shape({
    removeList: PropTypes.func,
    addItem: PropTypes.func,
    removeItem: PropTypes.func,
    buyItem: PropTypes.func,
  }),
};

class Lists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: '',
      itemAmount: '',
    };

    this.addItemHandler = this.addItemHandler.bind(this);
    this.removeListHandler = this.removeListHandler.bind(this);
    this.removeItemHandler = this.removeItemHandler.bind(this);
    this.buyItemHandler = this.buyItemHandler.bind(this);
  }

  removeListHandler(id) {
    this.props.actions.removeList(id);
  }

  addItemHandler(listId, itemName, itemAmount) {
    if (this.state.itemName.trim() === '') {
      return;
    }

    this.props.actions.addItem(listId, itemName, itemAmount);

    this.setState({
      itemName: '',
      itemAmount: '',
    });
  }

  changeItemName(itemName) {
    this.setState({
      itemName,
    });
  }

  changeItemValue(itemAmount) {
    this.setState({
      itemAmount,
    });
  }

  removeItemHandler(listId, itemId) {
    this.props.actions.removeItem(listId, itemId);
  }

  buyItemHandler(listId, itemId) {
    this.props.actions.buyItem(listId, itemId);
  }

  render() {
    return (
      <ListsComponent
        lists={this.props.lists.lists}
        removeList={this.removeListHandler}
        addItem={this.addItemHandler}
        changeItemName={(e) => this.changeItemName(e.target.value)}
        changeItemValue={(e) => this.changeItemValue(e.target.value)}
        itemName={this.state.itemName}
        itemAmount={this.state.itemAmount}
        removeItem={this.removeItemHandler}
        buyItem={this.buyItemHandler}
      />
    );
  }
}

export default connect(state => ({
  lists: state.lists,
}), dispatch => ({
  actions: bindActionCreators({
    removeList,
    addItem,
    removeItem,
    buyItem,
  }, dispatch),
}))(Lists);

Lists.propTypes = propTypes;
