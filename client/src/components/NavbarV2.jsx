import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import Logo from '../assets/game-logo-test.png';
import '../style/NavbarV2.css';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import NavbarMobile from './NavbarMobile';

const Navbar_v2 = () => {
    const [searchToggle, setSearchToggle] = useState('YT');
    const [search, setSearch] = useState('');
    const [searchPlaceholder, setSearchPlaceholder] = useState('Search for gaming videos!');
    const [hamburger, setHamburger] = useState(false);
    const { loading, data } = useQuery(GET_ME);

    const handleClickToggle = () => {
        if (searchToggle === 'YT') {
            setSearchToggle('TW');
            setSearchPlaceholder('Search for your favorite game!');
        };
        if (searchToggle === 'TW') {
            setSearchToggle('YT');
            setSearchPlaceholder('Search for gaming videos!');
        };
    };

    const handleHamburger = () => {
        setHamburger(!hamburger);
    };

    return (
        <>
            <div className='navbar'>
                <div className="nav-hamburger-container">
                    <div className="navbar-hamburger" onClick={handleHamburger}>
                        {hamburger ? (
                            <i class="fas fa-times navbar-transition"></i>
                        ) : (
                            <i class="fas fa-bars navbar-transition"></i>
                        )}
                    </div>
                </div>
                <div className="nav-left">
                    <Link to={`/`}>
                        <img className='nav-left-logo'
                            src={Logo}
                            alt="game logo" />
                    </Link>
                </div>
                <div className="nav-center">
                    <input type="text" className="navbar-search-input" placeholder={searchPlaceholder} onChange={(e) => setSearch(e.target.value)} autocorrect="off" />
                    {search ? (
                        <Link to={`/search/type=${searchToggle}&q=${search}`} className="navbar-search-button" type="submit">
                            <i className="fas fa-search"></i>
                        </Link>
                    ) : (
                        <div className="navbar-search-button navbar-disabled">
                            <i className="fas fa-search"></i>
                        </div>
                    )}
                    <input className="toggle" type="checkbox" onClick={handleClickToggle} />
                </div>
                <div className="nav-right">
                    {/* if user isn't logged in display login and signup, if they are then display logout */}
                    {Auth.loggedIn() ? (
                        <>
                            {loading ? (null) : (
                                <span className="navbar-user">{data.me.username}</span>
                            )}
                            <a href="/" className="navbar-logout" onClick={() => Auth.logout()}>
                                <i className="fas fa-power-off navbar-buttons">
                                    <span className="navbar-tooltip">Log out</span>
                                </i>
                            </a>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <i className="fas fa-sign-in-alt navbar-buttons">
                                    <span className="navbar-tooltip-login">Log in</span>
                                </i>
                            </Link>
                            <Link to="/signup">
                                <i className="fas fa-user-plus navbar-buttons">
                                    <span className="navbar-tooltip">Sign up</span>
                                </i>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <div className={`navbar-mobile-dropdown ${hamburger ? ("nav-mobile-active") : ("nav-mobile-disabled")}`}>
                <NavbarMobile />
            </div>
        </>
    );
};

export default Navbar_v2;