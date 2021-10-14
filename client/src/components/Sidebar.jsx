import React, { useState, useEffect } from 'react';
import '../style/Sidebar.css';
import Channel from '../components/Channel';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { getChannels, getTwToken } from '../utils/API';
import Auth from '../utils/auth';


const Sidebar = () => {
    const { loading, data } = useQuery(GET_ME);
    const [follows, setFollows] = useState('');
    const loggedIn = Auth.loggedIn();
    console.log(data);

    const getFollowChannels = async () => {
        try {
            const response = await getTwToken();
            if (!response.ok) {
                throw new Error("something went wrong!");
            };
            const { access_token } = await response.json();
            try {
                const games = await getChannels(data, access_token);
                const chan = await games.json();
                console.log(chan.data);
                return chan.data;
            }
            catch (error) {
                console.error(error);
            };
        }
        catch (error) {
            console.error(error);
        };
    };

    useEffect(() => {
        if (!loading) {
            async function handle() {
                let channels = await getFollowChannels();
                setFollows(channels);
            };
            handle();
        }
    }, [loading]);


    return (
        <div className="sidebar" key="sidebar">
            <div className="sidebar__top">
                {loggedIn ? (
                    <>
                        <h5>YOUR CHANNELS</h5>

                        {follows ? (
                            <>
                                {follows.map((follow) => {
                                    return (
                                        <Channel avatar={follow.profile_image_url} name={follow.display_name} />
                                    );
                                })}
                            </>
                        ) : (null)}

                        <div className="hL"></div>

                        <h5>SAVED VIDEOS</h5>

                        {loading ? (null) : (
                            <>
                                {data.me.videos.map((video) => {
                                    return (
                                        <div className="savedVideo__container">
                                            <p className="savedVideo__title">{video.title}</p>
                                            <span className="savedVideo__trash">
                                                <i className="fa fa-trash" id="savedVideo__trash" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    );
                                })}
                            </>
                        )}

                        <div className="hL"></div>

                        <button className="donoBtn">DONATION</button>
                    </>
                ) : (
                    <h3>Login or signup to save channels and videos</h3>
                )}

            </div>
        </div>
    )
}

export default Sidebar
