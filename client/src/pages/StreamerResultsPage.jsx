import React from 'react'
import Sidebar from '../components/Sidebar';
import StreamerResults from "../components/StreamerResults";

const StreamerResultsPage = () => {
    return (
        <div className="app__main">
            <Sidebar />
            <div className="main__container">
                <StreamerResults />
            </div>
        </div>
    )
}

export default StreamerResultsPage
