import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import Logo from '../assets/game-logo-test.png';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import '../style/NavbarV2.css';

const NavbarMobile = () => {
    const { loading, data } = useQuery(GET_ME);

    return (
        <>
            <ul className="navbar-dropdown-mobile-content">
                <Link to={`/`} className="navbar-nostyle">
                    <li className="navbar-mobile-list">
                        <i className="fas fa-home fa-lg nav-prop navbar-mobile-transition"></i>
                    </li>
                </Link>
                <li className="navbar-mobile-list">
                    <i className="fas fa-gamepad fa-lg nav-prop navbar-mobile-transition"></i>
                </li>
                <li className="navbar-mobile-list">
                    <i className="fas fa-user fa-lg nav-prop navbar-mobile-transition"></i>
                </li>
            </ul>
            <div className="nav-mobile-user-status">
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
        </>

    );
}

export default NavbarMobile;