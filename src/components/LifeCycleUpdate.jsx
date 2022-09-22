import React, { Component } from 'react';

export class LifecylceUpdate extends Component {
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

    shouldComponentUpdate() {
        console.log('LifeCycle shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prexState) {
        console.log('LifecycleA getSnapshotBeforeUpdate', prexState)
        return null
    }

    componentDidUpdate() {
        console.log('Lifecycle componentDidUpdate')
    }

    buttonstate = () =>{
        this.setState({
            name:"Suriya"
        })
    }
  render() {
      console.log('renderA')
    return (
        <div>
            LifecylceUpdateA
            <button onClick={this.buttonstate}>Change</button>
        </div>
    );
  }
}

export default LifecylceUpdate;
