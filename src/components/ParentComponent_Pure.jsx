import React, { Component } from 'react';
import MemoComp from './MemoComp';
import MemoNotcomp from './MemoNotcomp';
import WithoutPure from './withoutPure';

export class ParentComponent_Pure extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Suriya"
      }
    }

    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name : "Suriya1"
            })
        },2000)
    }
    
  render() {
      console.log("****ParentComponent Render***********")
    return (
        <div>
            <h3>Parent Component {this.state.name}</h3>
            {/* <WithoutPure name={this.state.name} />
            <Pure_Component name={this.state.name} /> */}
            <MemoComp name={this.state.name} />
            <MemoNotcomp name={this.state.name} />
        </div>
    );
  }
}

export default ParentComponent_Pure;
