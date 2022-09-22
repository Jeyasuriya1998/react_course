import React from 'react'

// function FrInputComponnent() {
//   return (
//     <div>
//       <input type='text' />
//     </div>
//   )
// }

const FrInputComponnent = React.forwardRef((props, ref) => {
      return (
            <div>
                  <input type='text' ref={ref} />
            </div>
      )
})

export default FrInputComponnent
