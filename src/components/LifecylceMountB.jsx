import React, { Component } from 'react';

export class LifecylceMountB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "name"
      }
      console.log('ContructorB');
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromPropsB')
        return null;
    }
    componentDidMount(){
        console.log('componentDidMountB')
    }
  render() {
      console.log('renderB')
    return (
        <div>
            LifecycleMountB
        </div>
    );
  }
}

export default LifecylceMountB;
