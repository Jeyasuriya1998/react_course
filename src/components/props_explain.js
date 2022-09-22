import React, {Component} from "react";

const Props_Component = props => {
    return(
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}
        </div>

    )
}

export default Props_Component;