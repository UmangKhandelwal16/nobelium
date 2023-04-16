import React from 'react'
import { Link } from 'react-router-dom'

function Contact () {
  return (
    <>
    <h1 style = {{backgroundColor: "grey" }}>
        I hold contact us information 
    </h1>
     <Link to = "/">Home</Link> <br/>
     <Link to = "/about">About</Link>
    </>
  )
}

export default Contact;
