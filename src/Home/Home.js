import React from 'react';


const Home = () => {
    return (
        <>
    
    <div className={Home.main_container}>
            <div className={Home.content_section}>
                <p className={Home.free}>Totally Free</p>
                <h2><span> I </span> Let's bring your <br /> team together <br /> in onclick</h2>
                <p className={Home.content}>We help you to manage all of your work <br /> and daily task in office</p>
                <button className={Home.btn_getStared}> Get Started </button>
                <button className={Home.btn_howToUse}>How to use</button>
            </div>
            <div className={Home.image_bg}></div>
            <img src="https://images.pexels.com/photos/10919342/pexels-photo-10919342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo" />
            </div>
        </>
    )
}



export default Home;