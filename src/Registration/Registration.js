import React from 'react'
import {Link} from "react-router-dom"

const Registration = () => {

  return (
    <>
      <h2> Login page</h2>
      <input type='text' placeholder='email' /> 
      <input type='text' placeholder='pasword'/> 

      <Link to='/register'> Register</Link>
    
    </>
  )
}

export default Registration;