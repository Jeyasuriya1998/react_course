import React, { Component } from 'react';
import ChildrenComponent from './ChildrenComponent';

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          message: "Parent"
      }
      this.ParentAlert = this.ParentAlert.bind(this)
    }

    ParentAlert(child){
        console.log("Parebt")
        alert(`Hello ${this.state.message} from ${child}`)
    }
  render() {
    return (
        <div>
            <ChildrenComponent parentalert={this.ParentAlert}/>
        </div>
        );
  }
}

export default ParentComponent;
