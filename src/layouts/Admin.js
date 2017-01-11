import React, { Component } from 'react';
import { Row, Col } from 'elemental';
import 'elemental/less/elemental.less';

import Menus from '../components/Menus';
import './App.less';

class App extends Component { //eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="App">
        <h1>Lunch is coming</h1>

        <Row>
          <Col sm="1/3">
            <div>Links</div>
          </Col>

          <Col sm="1/6">
            <div>Forms</div>
            <Menus />
          </Col>
        </Row>

      </div>
    );
  }
}

export default App;
