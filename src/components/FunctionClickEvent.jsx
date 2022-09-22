import React from 'react';

function FunctionClickEvent() {
    function ClickEvent(){
        console.log("Function Click")
    }
  return (
    <div>
        <button onClick={ClickEvent}>Click Me</button>
    </div>
    )
}

export default FunctionClickEvent;
