import React, {Component} from "react";

export default class JSX_JS extends Component {
    render(){
        // return(
        //     <div>
        //         <h1>Hello JS -- JSX</h1>
        //     </div>
        // )
        return React.createElement("div",{id:"id", className:"Class"}, React.createElement('h1', null, "Hello JS -- JSX"))

    }
}