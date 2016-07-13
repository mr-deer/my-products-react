import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderComponent from '../components/Header.jsx';
import { addList } from '../actions/lists.js';

const propTypes = {
  actions: PropTypes.shape({
    addList: PropTypes.func,
  }),
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.addListHandler = this.addListHandler.bind(this);
  }

  addListHandler() {
    this.props.actions.addList(this.state.name);
    this.setState({
      name: '',
    });
  }

  changeName(name) {
    this.setState({
      name,
    });
  }

  render() {
    return (
      <HeaderComponent
        addList={this.addListHandler}
        changeName={(e) => this.changeName(e.target.value)}
        name={this.state.name}
      />
    );
  }
}

Header.propTypes = propTypes;

export default connect(state => ({
  lists: state.lists,
}), dispatch => ({
  actions: bindActionCreators({
    addList,
  }, dispatch),
}))(Header);
