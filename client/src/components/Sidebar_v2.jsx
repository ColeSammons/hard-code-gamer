import React, { useEffect, useState } from "react";
import "../style/Sidebar_v2.css";

const Sidebar_v2 = () => {

    const [toggle, setToggle] = useState(false);
    const [toggleArrow, setToggleArrow] = useState(false);
    const [toggleDropdown, settoggleDropdown] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
        setToggleArrow(!toggleArrow);
    };

    const handleDropdown = () => {
        settoggleDropdown(!toggleDropdown);
    };

    // useEffect(() => {

    // }, [toggle]);

    return (
        <div className={`sidebar-wrapper ${toggle ? "sidebar-lg" : "sidebar-sm"}`}>
            <div className="close-button" onClick={handleToggle}>
                <i className={`fas fa-arrow-right ${toggleArrow ? "sidebar-rotate-arrow" : ""}`}></i>
            </div>
            <ul className="list-wrapper">
                <li className="sidebar-list">
                    <i className="fas fa-home fa-lg icon"></i>
                    <span className="sidebar-title">Home</span>
                </li>
                <li className="sidebar-list">
                    <i className="fas fa-user fa-lg icon"></i>
                    <span className="sidebar-title">Profile</span>
                </li>
                <li className="sidebar-list">
                    <i className="fas fa-play fa-lg icon"></i>
                    <span className="sidebar-title">Streams</span>
                </li>
                <li className="dropdown-videos-container">
                    <li className={`sidebar-list ${toggleDropdown ? "active-dropdown-color" : ""}`} onClick={handleDropdown}>
                        <i className="fas fa-video fa-lg icon"></i>
                        <span className="sidebar-title dropdown">Videos</span>
                        <span className="hidden-arrow"><i className={`fas fa-chevron-right ${toggleDropdown ? "hidden-arrow-rotate" : "hidden-arrow-rotate-inactive"}`}></i></span>
                    </li>
                    <ul className={`dropdown-videos-content ${toggleDropdown ? "active-dropdown" : "inactive-dropdown"}`}>
                        <li>Dark Souls Speedrun</li>
                        <li>Judge Dredd Review</li>
                    </ul>
                </li>

            </ul>

        </div >
    )
};

export default Sidebar_v2;

