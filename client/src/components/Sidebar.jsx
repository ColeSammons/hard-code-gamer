import React from 'react'
import '../style/Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h5>YOUR CHANNELS</h5>
                <div className="hL"></div>
                <button className="donoBtn">DONATION</button>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">
                    <h5>HARD CODE GAMERS - 2021</h5>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
