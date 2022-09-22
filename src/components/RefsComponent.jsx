import React, { Component } from 'react';

export class RefsComponent extends Component {
    constructor(props) {
      super(props)
      
      this.inputRefs = React.createRef()
      
      this.callbackRef = null;
      this.setCBRef = element => {
        this.callbackRef = element
      }
    }

    componentDidMount() {
        if (this.callbackRef) {
          this.callbackRef.focus()
        }
        // this.inputRefs.current.focus();
        // console.log(this.inputRefs);
    }
    
    HandleClick = () => {
        console.log(this.inputRefs.current.value)
        alert("Name is "+this.inputRefs.current.value)
    } 
  render() {
    return (
        <div>
            <input type="text" ref={this.inputRefs}/>
            <input type="text" ref={this.setCBRef} />
            <button onClick={this.HandleClick}>Submit</button>
        </div>
    );
  }
}

export default RefsComponent;
