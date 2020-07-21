import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null, // eslint-disable-line react/no-unused-state
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ buttonName }) {
    this.setState(state => calculate(state, buttonName));
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="app">
        <Display result={total || next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
