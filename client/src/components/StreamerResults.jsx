import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import '../style/StreamerResults.css';
import { Link } from 'react-router-dom';

const StreamerResults = ({ item }) => {
    let letter = item.thumbnail_url.split('-{width}x{height}.jpg')[0];
    let newURL = `${letter}-564x338.jpg`;
    console.log(item);

    const [video, setVideo] = useState(false);

    return (
        <div className="col-xl-4 col-lg-6 col-md-12 text-center fix__padding my-2">
            <Link to={`/watchTwitch/${item.user_name}`} className="streamerLink">
                {/* <img src={newURL} alt="stream-thumbnail" className="image__thumb" /> */}
                {video ? (
                    <iframe className="image__thumb"
                        src={`https://player.twitch.tv/?channel=${item.user_name}&parent=localhost&muted=true&controls=false`}
                        height="190px"
                        width="320px"
                        frameBorder="0"
                        allowfullscreen={false}
                        onMouseLeave={() => setVideo(false)}>
                    </iframe>) : (
                    <img src={newURL} alt="stream-thumbnail" className="image__thumb margin__fix" onMouseEnter={() => setVideo(true)} />
                )}
                <div className="stream__info__container">
                    <div className="stream__title">{item.title}</div>
                    <p className="streamer__name">{item.user_name}</p>
                    <Avatar className="avatar"></Avatar>
                </div>
            </Link>
        </div>
    );
};

export default StreamerResults;

// {/* <Link to={`/watchTwitch/${item.user_name}`} className="streamerLink">
//             <div className="stream__results__container">
//                 <div className="stream__results">
//                     <img src={newURL} alt="stream-thumbnail" className="image__thumb" />
//                     {/* {video ? (
//                         <iframe className="image__thumb"
//                             src={`https://player.twitch.tv/?channel=${item.user_name}&parent=localhost&muted=true&controls=false`}
//                             height="200px"
//                             width="400px"
//                             frameBorder="0"
//                             allowfullscreen= {false}
//                             onMouseLeave={() => setVideo(false)}>
//                         </iframe>) : (
//                         <img src={newURL} alt="stream-thumbnail" className="image__thumb" onMouseEnter={() => setVideo(true)}/>
//                     )} */}
//                     <div className="stream__info__container">
//                         <h2 className="stream__title">{item.title}</h2>
//                         <p className="streamer__name">{item.user_name}</p>
//                         <Avatar className="avatar"></Avatar>
//                     </div>
//                 </div>
//             </div>
//         </Link> */}