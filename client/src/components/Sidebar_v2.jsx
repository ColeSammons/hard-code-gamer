import React, { useEffect, useState } from "react";
import Channel from '../components/Channel';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { getChannels, getTwToken } from '../utils/API';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import "../style/Sidebar_v2.css";

const Sidebar_v2 = () => {

    const [toggle, setToggle] = useState(false);
    const [toggleArrow, setToggleArrow] = useState(false);
    const [toggleDropdownVideos, settoggleDropdownVideos] = useState(false);
    const [toggleDropdownStreams, settoggleDropdownStreams] = useState(false);

    const { loading, data } = useQuery(GET_ME);
    const [follows, setFollows] = useState('');
    const loggedIn = Auth.loggedIn();
    console.log(data);


    //toggles sidebar expand and arrow
    const handleToggle = () => {
        setToggle(!toggle);
        setToggleArrow(!toggleArrow);
    };

    //toggles dropdown for Videos
    const handleDropdownVideos = () => {
        settoggleDropdownVideos(!toggleDropdownVideos);
        if (toggleArrow === false && toggleDropdownVideos === false) {
            handleToggle();
        }
    };

    //toggles Dropdown for Streams
    const handleDropdownStreams = () => {
        settoggleDropdownStreams(!toggleDropdownStreams);
        if (toggleArrow === false && toggleDropdownStreams === false) {
            handleToggle();
        }
    };

    useEffect(() => {
        //Gets user's followed channels
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
        //If not loading user data, then get channels user follows
        if (!loading) {
            async function handle() {
                let channels = await getFollowChannels();
                setFollows(channels);
            };
            handle();
        }
    }, [loading, data]);

    return (
        <div className={`sidebar-wrapper ${toggle ? "sidebar-lg" : "sidebar-sm"} transition-sidebar`}>
            <div className="close-button" onClick={handleToggle}>
                <i className={`fas fa-arrow-right ${toggleArrow ? "sidebar-rotate-arrow" : ""} transition-sidebar`}></i>
            </div>
            <ul className="list-wrapper">
                <li className="sidebar-list transition-sidebar">
                    <Link to={`/`}>
                        <i className="fas fa-home fa-lg icon"></i>
                        <span className="sidebar-title">Home</span>
                    </Link>
                </li>
                <li className="sidebar-list transition-sidebar">
                    <i className="fas fa-user fa-lg icon"></i>
                    <span className="sidebar-title">Profile</span>
                </li>
                <li className="dropdown-videos-container">
                    <li className={`sidebar-list ${toggleDropdownStreams ? "active-dropdown-color" : ""} transition-sidebar`} onClick={handleDropdownStreams}>
                        <i className="fas fa-play fa-lg icon"></i>
                        <span className="sidebar-title dropdown">Streams</span>
                        <span className="hidden-arrow"><i className={`fas fa-chevron-right ${toggleDropdownStreams ? "hidden-arrow-rotate" : ""} transition-sidebar`}></i></span>
                    </li>
                    <ul className={`dropdown-videos-content ${toggleDropdownStreams ? "active-dropdown" : "inactive-dropdown"} transition-sidebar`}>
                        {loggedIn ? (
                            <>
                                {follows ? (
                                    <>
                                        {follows.map((follow) => {
                                            return (
                                                <Channel avatar={follow.profile_image_url} name={follow.display_name} />
                                            );
                                        })}
                                    </>
                                ) : (null)}
                            </>
                        ) : (
                            <div className="sidebar-not-user">Log in or Sign up!</div>
                        )}

                    </ul>
                </li>
                <li className="dropdown-videos-container">
                    <li className={`sidebar-list ${toggleDropdownVideos ? "active-dropdown-color" : ""} transition-sidebar`} onClick={handleDropdownVideos}>
                        <i className="fas fa-video fa-lg icon"></i>
                        <span className="sidebar-title dropdown">Videos</span>
                        <span className="hidden-arrow"><i className={`fas fa-chevron-right ${toggleDropdownVideos ? "hidden-arrow-rotate" : ""} transition-sidebar`}></i></span>
                    </li>
                    <ul className={`dropdown-videos-content ${toggleDropdownVideos ? "active-dropdown" : "inactive-dropdown"} transition-sidebar`}>
                        {loggedIn ? (
                            <>
                                {loading ? (null) : (
                                    <>
                                        {data.me.videos.map((video) => {
                                            return (
                                                <li>
                                                    <Link to={`/watchScreen/${video.youtubeID}`} className="channel sidebar-text-expand" key={video.title}>
                                                        <i class="fab fa-youtube fa-lg sidebar-video-icon"></i>
                                                        <div>
                                                            <p className="sidebar-video-title">{video.title}</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                            );
                                        })}
                                    </>
                                )}
                            </>
                        ) : (
                            <div className="sidebar-not-user">Log in or Sign up!</div>
                        )}
                    </ul>
                </li>

            </ul>

        </div >
    )
};

export default Sidebar_v2;

