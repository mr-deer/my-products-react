import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListsComponent from '../components/Lists.jsx';
import { removeList } from '../actions/lists.js';
import { addItem, removeItem, buyItem } from '../actions/items.js';
import { getByIds, getIds } from '../reducers/index';

const propTypes = {
  lists: PropTypes.object,
  ids: PropTypes.array,
  byIds: PropTypes.object,
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

    this.addItemHandler = this.addItemHandler.bind(this);
    this.removeListHandler = this.removeListHandler.bind(this);
    this.removeItemHandler = this.removeItemHandler.bind(this);
    this.buyItemHandler = this.buyItemHandler.bind(this);
  }

  removeListHandler(id) {
    this.props.actions.removeList(id);
  }

  addItemHandler(listId, itemName, itemAmount) {
    if (itemName.trim() === '') {
      return;
    }

    this.props.actions.addItem(listId, itemName, itemAmount);
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
        ids={this.props.ids}
        byIds={this.props.byIds}
        removeList={this.removeListHandler}
        addItem={this.addItemHandler}
        removeItem={this.removeItemHandler}
        buyItem={this.buyItemHandler}
      />
    );
  }
}

export default connect(state => ({
  ids: getIds(state),
  byIds: getByIds(state),
}), dispatch => ({
  actions: bindActionCreators({
    removeList,
    addItem,
    removeItem,
    buyItem,
  }, dispatch),
}))(Lists);

Lists.propTypes = propTypes;
