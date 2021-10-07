import React, { useEffect, useState } from 'react';
import '../style/WatchScreen.css';
import { useParams } from 'react-router';
// import { ADD_VIDEO, ADD_FOLLOW } from '../utils/mutations';
import ReactPlayer from 'react-player'


const WatchTWScreen = () => {
    let { id } = useParams();

    return (
        <ReactPlayer url={`https://www.twitch.tv/${id}`} playing="true" muted="true" width="1000px" height="500px"/>
    )
}

export default WatchTWScreen
