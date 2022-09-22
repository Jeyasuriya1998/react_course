import React, {Component} from 'react';

export default class SetState_Component extends Component{
    constructor(props){
        super()
        this.state={
            message: props.message,
        } 
    }
    changeMessage(){
        if (this.state.message == this.props.message) {
            this.setState({
                message:"Thanks Suriya",
            })
        }
        else{
            this.setState({
                message:this.props.message,
            })
        }
        
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Change</button>
            </div>
        )
    }
}