import React from 'react'
import { Avatar } from '@material-ui/core'
import '../style/StreamerResults.css';
import { Link } from 'react-router-dom';

const StreamerResults = ({ item }) => {
    let letter = item.thumbnail_url.split('-{width}x{height}.jpg')[0];
    let newURL = `${letter}-564x338.jpg`;
    console.log(item);

    return (
            <Link to={`/watchTwitch/${item.user_name}`}>
                <div className="stream__results__container">
                    <div className="stream__results">
                        <img src={newURL} alt="stream-thumbnail" />
                        <div className="stream__info__container">
                            <div className="stream__info__left">
                                <Avatar className="avatar"></Avatar>
                            </div>
                            <div className="stream__info__right">
                                <h2 className="stream__title">{item.title}</h2>
                                <p className="streamer__name">{item.user_name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
    );
};

export default StreamerResults;
