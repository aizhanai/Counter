import React from "react";
import { render } from "react-dom";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  deccrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: (this.state.count = 0) });
  };

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.deccrement} calssName="counter">
          Decrease
        </button>
        <button onClick={this.reset} className="counter">
          Reset
        </button>
        <button onClick={this.increment} className="counter">
          Increase
        </button>
      </div>
    );
  }
}

export default App;
