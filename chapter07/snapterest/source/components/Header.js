import React, { Component } from 'react';

const headerStyle = {
  fontSize: '16px',
  fontWeight: '300',
  display: 'inline-block',
  margin: '20px 10px'
};

class Header extends Component {
  static defaultProps = {
    text: 'Default header'
  }

  render() {
    return (
      <h2 style={headerStyle}>{this.props.text}</h2>
    );
  }
}

export default Header;
