import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="app">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
