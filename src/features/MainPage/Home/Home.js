import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/catActions';

class Home extends Component {
  handleSmth = id => {
    this.props.addCat(id);
  };

  render() {
    return (
      <div
        onClick={() => {
          this.handleSmth(12);
        }}
      >
        fafsafsafasfasf
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addCat: id => {
      dispatch(actions.addCat(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
