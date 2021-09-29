import React from 'react';
import Logo from '../assets/game-logo-test.png';
import '../style/Navbar.css'; //import style for Nav component

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav__left">
                <img className='nav__leftLogo' 
                    src={Logo} 
                    alt="game logo" />
                <h2>HARD CODE GAMERS</h2>
            </div>
            <div className="nav__center">
                <input type="text" placeholder="Search"/>
                <div className="nav__centerLogoContainer">
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="nav__right">
                <div className="nav__rightContainer">
                    <div className="nav__rightLogin">
                        <h2>Login</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;