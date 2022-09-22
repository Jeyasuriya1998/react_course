import React, { Component } from 'react';

export class ConditionalRebdring extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         LoggedIn : false,
      }
    }
    
  render() {
    //   // if/else
    //   if (this.state.LoggedIn) {
    //     return <div>Logged In</div>
    //   }else{
    //       return <div>Not Loggged In</div>
    //   }
      
    //   // Element Variable
    //   let message
    //   if (this.state.LoggedIn) {
    //     message = "Logged In"
    //   }else{
    //       message = "Not Loggged In"
    //   }
    //   return <div>{message}</div>

    //   // ternery operation 
    //   return this.state.LoggedIn ? <div>Logged In</div> : <div>Not Logged In</div>

    // short Circuit Operation
    return this.state.LoggedIn && <div>Logged In</div>
  }
}

export default ConditionalRebdring;
