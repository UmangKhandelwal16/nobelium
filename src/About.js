import React from 'react'
import { Link } from 'react-router-dom'


function About() {
    
  return (
    <>
    <h1 style = {{backgroundColor: "orange" }}>hello, i'm About page </h1>
    <Link to = "/">Go to Home</Link> <br/>
    <Link to = "/contact">Contact Us</Link>
  </>
  )
}

export default About;