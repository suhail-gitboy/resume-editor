import React from 'react'
import "./Imgedit.css"
const Imgedit = ({image}) => {
  return (
    <div className='imgedit'>
        <img src={image} alt="" />
      </div>
  )
}

export default Imgedit
