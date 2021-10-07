import React from 'react';
// import Recommended from '../components/Recommended';
import Sidebar from '../components/Sidebar';
import WatchTWScreen from '../components/WatchTWScreen';

const WatchTwitch = () => {
    return (
        <div className="app__main">
            <Sidebar/>
            <div className="main__container">
                <WatchTWScreen/>
            </div>
        </div>
    );
};

export default WatchTwitch;
