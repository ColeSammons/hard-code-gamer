import React, { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core'
import '../style/StreamerResults.css';
import { Link } from 'react-router-dom';
import { getChannelInfo, getTwToken } from '../utils/API';

const StreamerResults = ({ item }) => {
    let letter = item.thumbnail_url.split('-{width}x{height}.jpg')[0];
    let newURL = `${letter}-564x338.jpg`;
    const [streamer, setStreamer] = useState('');

    const getChannelInformation = async () => {
        try {
            let response = await getTwToken();
            if (!response.ok) {
                throw new Error("something went wrong!");
            };
            let { access_token } = await response.json();
            try {
                const games = await getChannelInfo(item.user_name, access_token);
                const chan = await games.json();
                return chan.data[0].profile_image_url;

            }
            catch (error) {
                console.error(error);
            };
        }
        catch (error) {
            console.error(error);
        };
    };

    useEffect(async () => {
        let channel = await getChannelInformation();
        setStreamer(channel);
    })

    return (
        <div className="stream__wrapper" key={item.user_name}>
            <Link to={`/watchTwitch/${item.user_name}`} className="streamerLink">
                <div className="image_container">
                    <img src={newURL} alt="stream-thumbnail" className="image__thumb" />
                    <div className="live_badge">LIVE</div>
                    <div className="streamer_views">{item.viewer_count} viewers</div>
                </div>
                <div className="stream_profile">
                    {streamer && (<img src={streamer} alt="profile-picture" className="profile__pic" />)}
                    <div>
                        <div className="stream__title">{item.title}</div>
                        <div className="streamer__name">{item.user_name}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default StreamerResults;

