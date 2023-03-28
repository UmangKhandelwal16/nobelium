import React from 'react';

const About = () => {
    return (
        <>
        <div className={About.main_container}>
                <div className={About.content_section}>
                    <p className={About.free}>About Us</p>
                    <h2><span> We </span> Let's bring your <br /> team together <br /> in onclick</h2>
                    <p className={About.content}>We help you to manage all of your work <br /> and daily task in office</p>
                    <button className={About.btn_getStared}> LinkedIn </button>
                    <button className={About.btn_howToUse}>Contact Us</button>
                </div>
                <div className={About.image_bg}>
                <img src="https://images.pexels.com/photos/10919342/pexels-photo-10919342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="background" />
            </div>
        </div>
        </>
        );
}


export default About;



