import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { inject, observer } from 'mobx-react';

class Menus extends Component {
  static propTypes = {};
  static defaultProps = {};

  handleAddNew = () => {
    const dbRef = this.props.store.ref;
    const menu = {
      name: findDOMNode(this.refs.name).value,
      price: findDOMNode(this.refs.price).value,
    };

    const id = dbRef.child('menus').push().key;
    dbRef.update({
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

export default inject('store')(observer(Menus));
