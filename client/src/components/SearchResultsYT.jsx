import React from 'react';
import ReactPlayer from 'react-player';

const SearchResultsYT = ({item}) => {
    console.log(item);
    return (
        <div className="search__results" key={item.id.videoId}>
            <ReactPlayer className="searched__video"
                url={`https://www.youtube.com/watch?v=${item.id.videoId}`}
            />
            <div className="video__info">
                <h2>{item.snippet.title}</h2>
                <div className="channel__info">
                    <i className="fas fa-user" id=""></i>
                    <p>- {item.snippet.channelTitle}</p>
                </div>
                <p>{item.snippet.description}</p>
            </div>
        </div>
    );
};

export default SearchResultsYT;