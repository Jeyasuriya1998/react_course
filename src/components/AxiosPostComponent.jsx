import axios from 'axios';
import React, { Component } from 'react';

export class AxiosPostComponent extends Component {
      constructor(props) {
        super(props)
      
        this.state = {
           userId:'',
           title:'',
           body:''
        }
      }
      
      HandleSubmit = e =>{
            e.preventDefault();
            console.log(this.state);
            axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
                  .then(response => {console.log(response)})
                  .catch(error => console.log(error))
      }
  render() {
    return (
      <div>
            <form onSubmit={this.HandleSubmit}>
                  <div>
                        <input type='text' name="userId" onChange={e=> this.setState({[e.target.name]:e.target.value})} />
                  </div>
                  <div>
                        <input type='text' name="title" onChange={e => this.setState({[e.target.name]:e.target.value})}/>
                  </div>
                  <div>
                        <input type='text' name="body" onChange={e => this.setState({[e.target.name]:e.target.value})}/>
                  </div>
                  <button type='sumbit'>Submit</button>
            </form>
      </div>
    );
  }
}

export default AxiosPostComponent;
