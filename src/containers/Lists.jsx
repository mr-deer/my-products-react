import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ListComponent from '../components/Lists.jsx';

const propTypes = {
  lists: PropTypes.array,
};

class Lists extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.lists.lists, 'props');
    return (
      <ListComponent lists={this.props.lists.lists} />
    );
  }
}

export default connect(state => ({
  lists: state.lists,
}))(Lists);

Lists.propTypes = propTypes;
