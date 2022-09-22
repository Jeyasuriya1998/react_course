import React, { Component } from 'react';
import FrInputComponnent from './FrInputComponnent';

export class FRefParentComponent extends Component {
      constructor(props) {
        super(props)
        this.inputRef = React.createRef()
      }

      HandleClick = () =>{
            console.log(this.inputRef)
            this.inputRef.current.focus();
      }
      
  render() {
    return (
      <div>
            <FrInputComponnent ref={this.inputRef} />
            <button onClick={this.HandleClick}>Forward Ref</button>
      </div>
      );
  }
}

export default FRefParentComponent;
