import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import Logo from '../assets/game-logo-test.png';
import '../style/Navbar.css'; //import style for Nav component

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav__left">
                <Link to="/">
                    <img className='nav__leftLogo'
                        src={Logo}
                        alt="game logo" />
                </Link>
                <Link to="/" className="nav__leftName">
                    <h2 >HARD CODE GAMERS</h2>
                </Link>
            </div>
            <div className="nav__center">
                <input type="text" placeholder="Search" />
                <div className="nav__centerLogoContainer">
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="nav__right">
                {/* if user isn't logged in display login and signup, if they are then display logout */}
                {Auth.loggedIn() ? (
                    <>
                        <div className="nav__rightContainer">
                            <Link to="/login" className="nav__leftName">
                                <div className="nav__rightLogin">
                                    <h2>Login</h2>
                                </div>
                            </Link>
                        </div>
                        <div className="nav__rightContainer">
                            <Link to="/signup" className="nav__leftName">
                                <div className="nav__rightLogin">
                                    <h2>Signup</h2>
                                </div>
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className="nav__rightContainer">
                        <a href="/" className="nav__leftName" onClick={() => Auth.logout()}>
                            <div className="nav__rightLogin">
                                <h2>Logout</h2>
                            </div>
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;