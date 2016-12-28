import React, { Component } from 'react';
import { Row, Col } from 'elemental';
import 'elemental/less/elemental.less';
import './App.less';

class App extends Component {
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
          </Col>
        </Row>

      </div>
    );
  }
}

export default App;
