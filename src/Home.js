import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
    <h1 style = {{backgroundColor: "green" }}> Welcome to Home page </h1>
    <Link to = "/about">About</Link> <br/>
    <Link to = "/contact">Contact Us</Link> <br/>
    </>
  )
}

export default Home