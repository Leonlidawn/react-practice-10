import React from 'react';

export default class Greeting extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    window.alert(`hello,${this.props.name}!`)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Greeting {this.props.name}</button>
    );
  }

}