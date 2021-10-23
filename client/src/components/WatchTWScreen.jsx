import React, { useEffect, useState } from 'react';
import '../style/WatchScreen.css';
import { useParams } from 'react-router';
import { ADD_FOLLOW } from '../utils/mutations';
import ReactPlayer from 'react-player';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';


const WatchTWScreen = () => {
    let { id } = useParams();
    let [addFollow] = useMutation(ADD_FOLLOW);

    const addFollowHandler = async () => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
            return false;
        };
        try {
            const { data } = await addFollow({ variables: { streamName: id } });
            console.log(data);
        } catch (e) {

            console.error(e);
        }
    };

    return (
        <>
            <ReactPlayer url={`https://www.twitch.tv/${id}`} playing={true} muted={true} width="1000px" height="500px" />
            <div className="watchVideo__info__left">
                <h2 className="watchVideo__title">title</h2>
                <div className="views__publish">
                    <p className="watchVideo__views">Streamer</p>
                </div>
            </div>
            <div className="watchVideo__info__right">
                <div className="btnContainer">
                    <button className="saveButton" onClick={addFollowHandler}>SAVE CHANNEL</button>
                </div>
            </div>
            <div className="divider__line"></div>
        </>
    )
}

export default WatchTWScreen
