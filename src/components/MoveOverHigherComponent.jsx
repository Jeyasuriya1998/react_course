import React, { Component } from 'react';

export class MoveOverHigherComponent extends Component {
      constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
          incrementClick = () =>{
                this.setState(prevState => ({
                      count: prevState.count + 1,
                }))
          }
  render() {
        const {count} = this.state;
    return <div><h1 onMouseOver={this.incrementClick}>Increament on Moves Over {count}-times</h1></div>;
  }
}

export default MoveOverHigherComponent;
