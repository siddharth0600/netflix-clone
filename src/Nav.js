import React, {useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
    const [show,handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY>100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll")
        };
    }, [])

    return (
        <div className= {`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" 
                alt="Netflix Logo"
            />
            <img 
                className="nav__avatar"
                src="https://i.pinimg.com/564x/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.jpg"
                alt="Netflix avatar"
            />
        </div>
    )
}

export default Nav
