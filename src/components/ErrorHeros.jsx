import React from 'react'

function ErrorHeros({hero}) {
      if (hero === "Joker"){
            throw new Error("Not Found")
      }
  return (
    <div>
      {hero}
    </div>
  )
}

export default ErrorHeros
