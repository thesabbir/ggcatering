import React, { Component, PropTypes } from 'react';
import fire from '../../firebase';
import { findDOMNode } from 'react-dom';

class Menus extends Component {
  static propTypes = {};
  static defaultProps = {};

  handleAddNew = () => {
    const menu = {
      name: findDOMNode(this.refs.name).value,
      price: findDOMNode(this.refs.price).value,
    };

    const id = fire.database().ref().child('menus').push().key;
    fire.database().ref().update({
      [`menus/${id}`]: menu
    });
  };

  render() {
    return (
      <div>
        <div>
          <label>Name</label>
          <input ref="name" type="text"/>
        </div>
        <div>
          <label>Price</label>
          <input ref="price" type="text"/>
        </div>

        <button onClick={this.handleAddNew} type="button">Add new</button>
      </div>
    );
  }
}

export default Menus;
