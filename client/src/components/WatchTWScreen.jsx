import React, { useEffect, useState } from 'react';
import '../style/WatchScreen.css';
import { useParams } from 'react-router';
import { ADD_FOLLOW } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { getChannelInfo, getTwToken, getChannelByID } from '../utils/API';

const WatchTWScreen = () => {
    let { id } = useParams();
    let [addFollow] = useMutation(ADD_FOLLOW);
    const [streamer, setStreamer] = useState('');

    const addFollowHandler = async () => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
            return false;
        };
        try {
            const { data } = await addFollow({ variables: { streamName: id } });
            console.log(data);
        } catch (e) {

            console.error(e);
        }
    };

    const getChannelInformation = async () => {
        try {
            let response = await getTwToken();
            if (!response.ok) {
                throw new Error("something went wrong!");
            };
            let { access_token } = await response.json();
            try {
                const games = await getChannelInfo(id, access_token);
                const chan = await games.json();
                console.log(chan.data[0].profile_image_url);
                try {
                    const streamInfo = await getChannelByID(chan.data[0].id, access_token);
                    const stream = await streamInfo.json()
                    return {
                        channel: stream.data[0],
                        profilePic: chan.data[0].profile_image_url
                    };
                }
                catch (error) {
                    console.error(error);
                }
            }
            catch (error) {
                console.error(error);
            };
        }
        catch (error) {
            console.error(error);
        };
    };

    useEffect(async () => {
        let channel = await getChannelInformation();
        setStreamer(channel);
        console.log(channel);
    }, [id]);

    return (
        <div className="container-fluid px-0 cont" key="videoTW">
            <iframe className="watchScreen__player"
                src={`https://player.twitch.tv/?channel=${id}&parent=localhost&muted=true`}
                height="100%"
                width="100%"
                frameBorder="0"
                allowFullScreen>
            </iframe>
            <div className="row mx-2">
                <div className="col-md-2  col-3 d-flex justify-content-end px-0 ">
                    <img src={streamer.profilePic} alt="profile-picture" className="profile__pic" />
                </div>
                {streamer && (
                    <div className="col-md-8  col-8 pl-0">
                        <p className="watchVideo__name">{streamer.channel.broadcaster_name}</p>
                        <h3 className="watchVideo__title">{streamer.channel.title}</h3>
                    </div>
                )}

                <div className="col-md-2 col-12 d-flex justify-content-lg-end justify-content-center my-md-2">
                    <div className="btnContainer">
                        <button className="saveButton" onClick={addFollowHandler}>SAVE CHANNEL</button>
                    </div>
                </div>
            </div>
            <div className="divider__line"></div>
        </div>
    )
}

export default WatchTWScreen;


