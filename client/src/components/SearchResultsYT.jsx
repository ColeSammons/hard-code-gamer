import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

const SearchResultsYT = ({ item }) => {
    // console.log(item);
    return (
        <Link to={`/watchScreen/${item.id.videoId}`} className="video_title">
            <div className="search__results" key={item.id.videoId}>
                <img src={item.snippet.thumbnails.high.url} alt="youtube-thumnail" className="searched__video" />
                <div className="video__info">
                    <h2>{item.snippet.title}</h2>
                    <div className="channel__info">
                        <i className="fas fa-user" id=""></i>
                        <p>- {item.snippet.channelTitle}</p>
                    </div>
                    <p>{item.snippet.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default SearchResultsYT;