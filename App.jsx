import React from 'react'
import {useState} from 'react'

function App(){
const [name,setName] = useState("somya")
  return(
    <>
          <h1> hello {name} </h1>
          <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} />
    </>  
  )
}

export default App
