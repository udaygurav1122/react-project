import React from 'react'
import Lifecycle from './Lifecycle/Lifecycle';
import Life from './Lifecycle/Life';
import Context from './ContextApi/Context';
import Children1 from './ContextApi/Children1';
import Children2 from './ContextApi/Children2';


const App = () => {
  // console.log("render");

  // return (
  //   // <div>
  //   //   {/* <Lifecycle/> */} 
  //   // {/* <Life/> */}
  //   // </div>
  // )


  return (
    <Context >
      <Children1/>
      <Children2/>
    </Context>

  )
}

export default App

