import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListsComponent from '../components/Lists.jsx';
import { removeList } from '../actions/lists.js';
import { addItem } from '../actions/items.js';

const propTypes = {
  lists: PropTypes.object,
  actions: PropTypes.shape({
    removeList: PropTypes.func,
    addItem: PropTypes.func,
  }),
};

class Lists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: '',
    };

    this.addItemHandler = this.addItemHandler.bind(this);
    this.removeListHandler = this.removeListHandler.bind(this);
  }

  removeListHandler(id) {
    this.props.actions.removeList(id);
  }

  addItemHandler(id, itemName) {
    if (this.state.itemName.trim() === '') {
      return;
    }

    this.props.actions.addItem(id, itemName);

    this.setState({
      itemName: '',
    });
  }

  changeItemName(itemName) {
    this.setState({
      itemName,
    });
  }

  render() {
    return (
      <ListsComponent
        lists={this.props.lists.lists}
        removeList={this.removeListHandler}
        addItem={this.addItemHandler}
        changeItemName={(e) => this.changeItemName(e.target.value)}
        itemName={this.state.itemName}
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
  }, dispatch),
}))(Lists);

Lists.propTypes = propTypes;
