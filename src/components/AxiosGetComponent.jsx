import axios from 'axios';
import React, { Component } from 'react';

class AxiosGetComponent extends Component {
      constructor(props) {
        super(props)
      
        this.state = {
            post:[],
           error: ''
        }
      }
      
      componentDidMount(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                  console.log(response);
                  this.setState({
                        post: response.data
                  })})
            .catch(error => {
                  console.log(error)
                  this.setState({
                        error: "Error on While Fetching"
                  })
            });
      }
  render() {
        const {post, error } = this.state;
    return (
      <div>
            {
                  post.length &&
                  post.map(data => <h5 keys={data.id}>{data.title}</h5>)
            }

            {
                  error && <h5>{error}</h5>
            }
      </div>
    );
  }
}

export default AxiosGetComponent;
