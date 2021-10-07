import React from 'react'
import Recommended from '../components/Recommended'
import Sidebar from '../components/Sidebar'
import WatchScreen from '../components/WatchScreen'

const WatchPage = () => {
    return (
        <div className="app__main">
            <Sidebar/>
            <div className="main__container">
                <WatchScreen/>
                <Recommended/>
            </div>
        </div>
    )
}

export default WatchPage
