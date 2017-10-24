import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class StatefulComponent extends Component {
  state = {
    isHeaderHidden: false
  };

  handleClick() {
    this.setState({
      isHeaderHidden: !this.state.isHeaderHidden
    });
  }

  render() {
    return (
      <div>
        <h1 className="header" key="header">
          Stateful React Component
        </h1>,
        <button
          className="btn btn-default"
          key="button"
          onClick={this.handleClick}
        >
          Toggle header
        </button>
      </div>
    );
  }
}

export default StatefulComponent;
