// sometimes you just need this code

import React, { Component } from 'react';

class App extends Component {
  render() {
    const greeting = 'Welcome to React';

    return (
      <div>
        <Greeting greeting={greeting} />
      </div>
    );
  }
}

class Greeting extends Component {
  render() {
    return <h1>{this.props.greeting}</h1>;
  }
}

export default App;
