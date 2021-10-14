import React from 'react'
import '../style/Channel.css'

const Channel = ({avatar, name }) => {
    console.log(avatar, name );
    return (
        <div className="channel" key={name}>
            <div className="channel__details">
                <img src={avatar} alt="avatar" />
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Channel