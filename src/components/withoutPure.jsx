import React, { Component } from 'react';

export class WithoutPure extends Component {
  render() {
      console.log("Without Pure Component")
    return (
        <div>
            <h2>Without Pure Component {this.props.name}</h2>
        </div>
    );
  }
}

export default WithoutPure;
