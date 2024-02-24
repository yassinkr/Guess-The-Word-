import React from 'react'
import "./button.css"
const button = ({text,onClick}) => {
  return (
    
    <button onClick={onClick} className='btn'>
        {text}
    </button>
  )
}

export default button