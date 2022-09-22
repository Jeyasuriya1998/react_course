import React, { Component } from 'react';

export class ButtonClickHigherComponent extends Component {
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
    return (
      <div>
            <button onClick={this.incrementClick}>Click got {count}-times</button>
      </div>
    );
  }
}

export default ButtonClickHigherComponent;
