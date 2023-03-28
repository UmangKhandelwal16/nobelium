import React from 'react';


const Header = () => {
    return (
    <>
        <h1 style={{position: 'absolute', top: 0, left: 0}}>Code Learners </h1>
        <button className="HomeButton" style={{position: 'absolute', top: 5, right: 200}}>Home</button>
        <button className='DiscriptionButton' style={{position: 'absolute', top: 5, right: 100}}>About Us</button>
        <button className='RegisterButton' style={{position: 'absolute', top: 5, right: 20}}>Log in</button>
    </>
    );
}


export default Header;
