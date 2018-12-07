import React, { Component } from 'react';
import {Jumbotron, Grid} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div >
        <Jumbotron>
          <Grid>
            <h1>Search App</h1>
            <p>This is a simple search app</p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
