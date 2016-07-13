import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListsComponent from '../components/Lists.jsx';
import { removeList } from '../actions/lists.js';

const propTypes = {
  lists: PropTypes.object,
  actions: PropTypes.shape({
    removeList: PropTypes.func,
  }),
};

class Lists extends Component {
  constructor(props) {
    super(props);

    this.removeListHandler = this.removeListHandler.bind(this);
  }

  removeListHandler(id) {
    this.props.actions.removeList(id);
  }

  render() {
    return (
      <ListsComponent
        lists={this.props.lists.lists}
        removeList={this.removeListHandler}
      />
    );
  }
}

export default connect(state => ({
  lists: state.lists,
}), dispatch => ({
  actions: bindActionCreators({
    removeList,
  }, dispatch),
}))(Lists);

Lists.propTypes = propTypes;
