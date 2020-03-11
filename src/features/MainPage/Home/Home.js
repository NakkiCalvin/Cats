import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
 handleSmth = id => {
    this.props.addCat(id);
  };

  render() {
   
      return (
     <button
               
                onClick={() => {
                  this.handleSmth(12);
                }}
              >
      );
    };
 }
 
const mapStateToProps = state => {
  return {
    items: state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addCat: id => {
      dispatch(addCat(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
