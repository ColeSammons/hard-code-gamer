import React from 'react'
import '../style/Channel.css'

const Channel = ({avatar, name, followers}) => {
    return (
        <div className="channel">
            <div className="channel__details">
                <img src={avatar} alt="avatar" />
                <p>{name}</p>
            </div>
            <div>Followers: {followers}</div>
        </div>
    )
}

export default Channel