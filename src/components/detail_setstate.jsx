import React, { Component } from 'react';

export default class Detail_setState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
      }
    }
    increment(){
        // this.state.count = this.state.count+1
        
        // this.setState({
        //     count: this.state.count+1
        // }, ()=>{console.log(this.state.count)})   

        this.setState(prevState=>({
            count: prevState.count + 1,
        }), ()=>{console.log(this.state.count)})
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
  render() {
    return (
        <div>
            <h1>Count - {this.state.count}</h1>
            <button onClick={() => this.increment()}>Increment</button>
        </div>
        )
  }
}

