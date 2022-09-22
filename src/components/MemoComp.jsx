import React from 'react'

function MemoComp({name}) {
    console.log("Memo Function");
  return (
    <div>
      <h2>React Memo {name}</h2>
    </div>
  )
}

export default React.memo(MemoComp);
