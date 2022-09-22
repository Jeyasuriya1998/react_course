import React, { Component } from 'react';
import { LifecylceMountB } from './LifecylceMountB';

export class LifecylceMountA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "name"
      }
      console.log('ContructorA');
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromPropsA', state)
        return null;
    }
    componentDidMount(){
        console.log('componentDidMountA')
    }
  render() {
      console.log('renderA')
    return (
        <div>
            LifecycleMountA
            <LifecylceMountB />
        </div>
    );
  }
}

export default LifecylceMountA;
