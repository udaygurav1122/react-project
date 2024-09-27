import React from 'react'

const Parent = (Sample) => {

    let demo=()=>{
        return <Sample data={{name: "Uday", age:5000}}></Sample>
    }
  return demo;
}

export default Parent