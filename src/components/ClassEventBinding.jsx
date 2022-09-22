import React, { Component } from 'react';

export class ClassEventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }
    //   this.EventBinded = this.EventBinded.bind(this)
    }

    // EventBinded(){
    //     console.log("Clicked")
    //     this.setState({
    //         message: "GoodBye"
    //     })
    // }

    EventBinded = () =>{
        console.log("Clicked")
        this.setState({
            message: "GoodBye"
        })
    }

  render() {
    return (
        <div>
            <h1>{this.state.message}</h1>
            {/* <button onClick={this.EventBinded.bind(this)}>Click Me</button> */}
            {/* <button onClick={() => this.EventBinded()}>Click Me</button> */}
            <button onClick={this.EventBinded}>Click Me</button>
        </div>
    );
  }
}

export default ClassEventBinding;
