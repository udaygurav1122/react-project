import React, { useContext } from 'react'
import { Mycontext } from './Context';


const Children1 = () => {
    const {name}=useContext(Mycontext);
  return (
    <div><h1>{name}</h1> </div>
  )
}

export default Children1