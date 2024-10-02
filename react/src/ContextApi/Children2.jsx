import React from 'react'
import { Mycontext } from './Context'


const Children2 = () => {
  return (
    <Mycontext.Consumer>

        {
            ({name, phone})=>{

                return(
                    <div>
                        <h1>{name} and {phone}</h1>
                    </div>
                )
            }
        }

    </Mycontext.Consumer>
  )
}

export default Children2