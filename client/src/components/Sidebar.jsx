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
        </div>
    )
}

export default Sidebar
