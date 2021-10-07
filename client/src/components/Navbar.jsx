import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import Logo from '../assets/game-logo-test.png';
import '../style/Navbar.css'; //import style for Nav component

const Navbar = () => {
    const [searchToggle, setSearchToggle] = useState('YT');
    const [search, setSearch] = useState('');

    const handleClickToggle = () => {
        if (searchToggle === 'YT') {
            setSearchToggle('TW');
        };
        if (searchToggle === 'TW') {
            setSearchToggle('YT');
        };
    };
  
    return (
        <div className='navbar'>
            <div className="nav__left">
                <a href="/">
                    <img className='nav__leftLogo'
                        src={Logo}
                        alt="game logo" />
                </a>
                <a href="/" className="nav__leftName">
                    <h2 className="logo__name">HARD CODE GAMERS</h2>
                </a>
                <div className="hamburger__container">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            <div className="nav__center">
                <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                {search ? (
                        <Link to={`/search/type=${searchToggle}&q=${search}`} className="nav__centerLogoContainer">
                            <i className="fas fa-search"></i>
                        </Link>
                ) : (
                    <a type="submit" className="nav__centerLogoContainer">
                        <i className="fas fa-search"></i>
                    </a>
                )}
            </div>
            <input className="toggle" type="checkbox" onClick={handleClickToggle}/>
            <div className="nav__right">
                {/* if user isn't logged in display login and signup, if they are then display logout */}
                {Auth.loggedIn() ? (

                     <div className="nav__rightContainer">
                     <a href="/" className="nav__leftName" onClick={() => Auth.logout()}>
                         <div className="nav__rightLogin">
                             <h2>Logout</h2>
                         </div>
                     </a>
                 </div>
                ) : (
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
                )}
            </div>
        </div>
    )
}

export default Navbar;