import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import Sidebar from '../components/Sidebar';
import ReactPlayer from 'react-player';
import '../style/Search.css'

const Search = () => {
    return (

        <div className="app__main">
            <Sidebar/>
            <div className="main__container">
                <div className="search__container">

                    <div className="search__results">
                        <ReactPlayer className="searched__video"
                            url='https://www.youtube.com/watch?v=Xu7jY3OkvVY&t=5128s&ab_channel=GamesDoneQuick'
                        />
                        <div className="video__info">
                            <h2>Video Title</h2>
                            <div className="channel__info">
                                <i className="fas fa-user" id=""></i>
                                <p>- Channel Name</p>
                            </div>
                            <p>Video Description</p>
                        </div>
                    </div>

                    <div className="search__results">
                        <ReactPlayer className="searched__video"
                            url='https://www.youtube.com/watch?v=Xu7jY3OkvVY&t=5128s&ab_channel=GamesDoneQuick'
                        />
                        <div className="video__info">
                            <h2>Video Title</h2>
                            <div className="channel__info">
                                <i className="fas fa-user" id=""></i>
                                <p>- Channel Name</p>
                            </div>
                            <p>Video Description</p>
                        </div>
                    </div>

                    <div className="search__results">
                        <ReactPlayer className="searched__video"
                            url='https://www.youtube.com/watch?v=Xu7jY3OkvVY&t=5128s&ab_channel=GamesDoneQuick'
                        />
                        <div className="video__info">
                            <h2>Video Title</h2>
                            <div className="channel__info">
                                <i className="fas fa-user" id=""></i>
                                <p>- Channel Name</p>
                            </div>
                            <p>Video Description</p>
                        </div>
                    </div>

                    <div className="search__results">
                        <ReactPlayer className="searched__video"
                            url='https://www.youtube.com/watch?v=Xu7jY3OkvVY&t=5128s&ab_channel=GamesDoneQuick'
                        />
                        <div className="video__info">
                            <h2>Video Title</h2>
                            <div className="channel__info">
                                <i className="fas fa-user" id=""></i>
                                <p>- Channel Name</p>
                            </div>
                            <p>Video Description</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Search;