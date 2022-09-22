import React, { Component, useRef, useState } from 'react'
import useInput from './UseStateFrom1_USeinput';

function UseStaeForm1(props) {
      // const [firstName, setfirstName] = useState('')
      // const [lastName, setlastName] = useState('')
      const inputref = useRef(null);

      const [firstName, bindfirstname, resetFirstName] = useInput('');
      const [lastName, bindlastName, resetlLAstName] = useInput('');

      const HandleSubmit =(e) =>{
            e.preventDefault();
            alert(`First Name is ${firstName} Second Name is ${lastName}`);
            resetFirstName();
            resetlLAstName();
            // inputref.current.focus()
      }
      // Spread Opeartor
      return (
            <div>
                  <form onSubmit={HandleSubmit}>
                        <div>
                              <label>First Name</label>
                              <input type='text' {...bindfirstname} />
                        </div>
                        <div>
                              <label>Second Name</label>
                              <input type='text' {...bindlastName}/>
                        </div>
                        <button>Submit</button>
                  </form>
            </div>
        )

//       return (
//       <div>
//             <form onSubmit={HandleSubmit}>
//                   <div>
//                         <label>First Name</label>
//                         <input type='text' value={firstName} ref={inputref} onChange={e => setfirstName(e.target.value)}/>
//                   </div>
//                   <div>
//                         <label>Second Name</label>
//                         <input type='text' value={lastName} onChange={e => setlastName(e.target.value)}/>
//                   </div>
//                   <button>Submit</button>
//             </form>
//       </div>
//   )
}



export default UseStaeForm1

