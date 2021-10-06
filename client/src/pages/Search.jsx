import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Auth from '../utils/auth';
import Sidebar from '../components/Sidebar';
import ReactPlayer from 'react-player';
import '../style/Search.css'
import { getYtSearch, getTwToken, getTwCategoriesByGame } from '../utils/API';

const Search = () => {
    const { id } = useParams();
    let [a, b] = id.split('&');
    let type = a.split('=')[1];
    let search = b.split('=')[1];

    useEffect(async () => {
        if (type === 'YT') {
            try {
                const response = await getYtSearch(search);
                if (!response.ok) {
                    throw new Error("something went wrong!");
                };
                const { items } = await response.json();
                console.log(items);
            }
            catch (error) {
                console.error(error);
            };
        }
        else if (type === 'TW') {
            try {
                const response = await getTwToken();
                if (!response.ok) {
                    throw new Error("something went wrong!");
                };
                const { access_token, expires_in } = await response.json();
                console.log(`access-token: ${access_token}`);
                console.log(`expires-in: ${expires_in}`);
                try {
                    const games = await getTwCategoriesByGame(access_token, search);
                    const items = await games.json();
                    console.log(items);
                }
                catch (error) {
                    console.error(error);
                };
            }
            catch (error) {
                console.error(error);
            };
        }
        else {
            throw new Error("Please search for something!");
        }
    }, [id]);
   
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