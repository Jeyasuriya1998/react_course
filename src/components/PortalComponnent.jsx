import React from 'react'
import ReactDOM  from 'react-dom';


function PortalComponnent() {
  return ReactDOM.createPortal(
      <div>
            <h1>Portal-Root</h1>
      </div>,
      document.getElementById('portal-root')
  )
}

export default PortalComponnent
