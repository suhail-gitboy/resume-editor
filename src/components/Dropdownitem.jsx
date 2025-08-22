import React from 'react'
import "./Dropdownitem.css"
import { Link } from 'react-router'
const Dropdownitem = ({img,user}) => {
  return (
   <li className='dropli'>
       <img src={img} alt="" /> 
        <p>{user}</p>
    </li>
  )
}

export default Dropdownitem
