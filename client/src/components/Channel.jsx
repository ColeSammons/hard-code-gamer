import React, { useEffect, useState } from 'react';
import '../style/Channel.css';
import { Link } from 'react-router-dom';
import { getLiveChannel, getTwToken } from '../utils/API';

const Channel = ({ avatar, name }) => {
    const [liveStatus, setLiveStatus] = useState('');

    const getLiveStatus = async () => {
        try {
            const response = await getTwToken();
            if (!response.ok) {
                throw new Error("something went wrong!");
            };
            const { access_token } = await response.json();
            try {
                const games = await getLiveChannel(name, access_token);
                const chan = await games.json();
                console.log(chan.data);
                if (chan.data.length == 0) {
                    return false;
                }
                let status = {
                    views: setViewerFormat(chan.data[0].viewer_count),
                    game: chan.data[0].game_name
                }
                return status;
            }
            catch (error) {
                console.error(error);
            };
        }
        catch (error) {
            console.error(error);
        };
    };

    const setViewerFormat = (views) => {
        return Math.abs(views) > 999 ? Math.sign(views) * ((Math.abs(views) / 1000).toFixed(1)) + 'k' : Math.sign(views) * Math.abs(views)
    };

    useEffect(async () => {
        let live = await getLiveStatus();
        setLiveStatus(live);
    }, [])

    return (
        <li>
            <Link to={`/watchTwitch/${name}`} className="channel" key={name}>
                <div className="channel__details">
                    <img src={avatar} alt="avatar" className="channel-avatar" />
                    <div>
                        <p className="channel-name">{name}</p>
                        {liveStatus ? (
                            <p className="channel-game">{liveStatus.game}</p>
                        ) : (null)}
                    </div>
                    <div className="channel-views">
                        {liveStatus ? (
                            <>
                                <div className="channel-live"></div>
                                <div className="channel-view-num">{liveStatus.views}</div>
                            </>

                        ) : (
                            <div>Offline</div>
                        )}
                    </div>
                </div>
            </Link>
        </li>

    )
};

export default Channel;