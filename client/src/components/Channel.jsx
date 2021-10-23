import React from 'react';
import '../style/Channel.css';
import { Link } from 'react-router-dom';

const Channel = ({avatar, name }) => {
    console.log(avatar, name );
    return (
        <Link to={`/watchTwitch/${name}`} className="channel" key={name}>
            <div className="channel__details">
                <img src={avatar} alt="avatar" />
                <p>{name}</p>
            </div>
        </Link>
    )
};

export default Channel;