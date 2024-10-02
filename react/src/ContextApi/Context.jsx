import React, { createContext } from 'react'
import { Children } from 'react';

export const Mycontext= createContext();

const Context = ({children}) => {
  return (
    <Mycontext.Provider value={{name:"Uday", phone:9873450786}}>
        {children}
    </Mycontext.Provider>
  )
}

export default Context