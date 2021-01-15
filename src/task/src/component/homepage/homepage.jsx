import React from 'react'
import Hello from '../hello/hello'
import AllUsers from '../info page/info'
import './homepage.css'

const homepage = (props) =>{
  return (
    <div className='homepage row'>
      {props.children}
    </div>
  )
}

export default homepage





