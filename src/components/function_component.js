// import logo from './components/logo.svg';

import React from "react";

function Function_Component(props){
  console.log(props);
  return (
    <h1>Hello Suriya {props.name}</h1>
  )
}

// export const Function_Component = () => <h1>Hello Suriya</h1>

export default Function_Component;