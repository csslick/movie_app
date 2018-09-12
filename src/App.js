import React, { Component } from 'react';

class App extends Component {
  render() {
    let name = 'kwon';
    return (
      <div className="App">
        {
          1 + 1 == 2?
          (<p>yes</p>):(<p>no</p>)
        }  
      </div>
    );
  }
}

export default App;
