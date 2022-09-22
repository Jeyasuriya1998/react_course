import React, { Component } from 'react';

export class ErrorBoundryComponnent extends Component {
      constructor(props) {
        super(props)
      
        this.state = {
           getError : false,
        }
      }

      static getDerivedStateFromError(error){
            console.log(error)
            return{
                  getError: true,
            }
      }

      componentDidCatch (error, info){
            console.log("Error Catch "+error);
            console.log(info);
      }
      
  render() {
   if (this.state.getError){
         return <h1>Some thing Went Wrong</h1>;
   }
      return this.props.children;
  }
}

export default ErrorBoundryComponnent;
