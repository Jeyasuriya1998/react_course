import React from 'react';

function ChildrenComponent(props) {
  return (
        <div>
            <button onClick={() => props.parentalert('child')}>Click Child</button>
        </div>
  );
}

export default ChildrenComponent;
