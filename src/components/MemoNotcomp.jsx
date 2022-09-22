import React from 'react'

function MemoNotcomp({name}) {
    console.log("Non Memo Function");
  return (
    <div>
      <h2>Memonot Component {name}</h2>
    </div>
  )
}

export default MemoNotcomp
