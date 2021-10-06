import React from 'react'
import '../style/Sidebar.css'
import Channel from '@material-ui/core/Avatar'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h5>YOUR CHANNELS</h5>
                <Channel avatar=""
                    name="Placeholder"
                    followers="240"/>
                <div className="hL"></div>
                <button className="donoBtn">DONATION</button>
            </div>
        </div>
    )
}

export default Sidebar
