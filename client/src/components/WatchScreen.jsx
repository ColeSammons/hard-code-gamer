import React, { useEffect, useState } from 'react';
import '../style/WatchScreen.css';
import { useParams } from 'react-router';
import { getYtSearchI } from '../utils/API';
import Auth from '../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_VIDEO, ADD_FOLLOW } from '../utils/mutations';
// import { GET_ME } from '../utils/queries';

const WatchScreen = () => {
    let { id } = useParams();
    let youtubeID = id;
    let [displaySn, setDisplaySn] = useState({ snippet: '', statistics: '' });
    let [displaySt, setDisplaySt] = useState({ snippet: '', statistics: '' });
    let [variable, setvariable] = useState({streamName: 'njngjrngrjgnkrjg'});


    const [addFollow] = useMutation(ADD_FOLLOW);


    const handleDisplaySnippet = async () => {
        try {
            let response = await getYtSearchI(id, "snippet");
            if (!response.ok) {
                throw new Error;
            };
            let { items } = await response.json();
            return items;
        }
        catch (error) {
            console.error(error);
        };
    };

    const handleDisplayStatistics = async () => {
        try {
            let response = await getYtSearchI(id, "statistics");
            if (!response.ok) {
                throw new Error;
            };
            let { items } = await response.json();
            return items;
        }
        catch (error) {
            console.error(error);
        };
    };

    const getDate = (code) => {
        let date = new Date(code);
        let myDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
        return (myDate);
    };

    const addVideoHandler = async () => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
            return false;
        };
        // let variables = { variables: {streamName: 'bubba' }};
        try {
            console.log('hello');
            await addFollow({variables:{...variable}});
        } catch (error) {

            console.error(error);
        }
    };

    useEffect(() => {
        async function handle() {
            const snippet = await handleDisplaySnippet();
            const statistics = await handleDisplayStatistics();
            setDisplaySn(snippet[0]);
            setDisplaySt(statistics[0]);

        }
        handle();
    }, [id])
    return (
        <div className="watchScreen__container" key="54">
            {displaySn && displaySt ? (
                <>
                    <iframe className="watchScreen__player"
                        src={`https://www.youtube.com/embed/${id}`}
                        frameBorder="0"
                        title="placeholder"
                        allowFullScreen
                        width="100%"
                        height="100%"
                    ></iframe>
                    <div className="watchVideo__info__left">
                        <h2 className="watchVideo__title">{displaySn.snippet.title}</h2>
                        <div className="views__publish">
                            <p className="watchVideo__views">{displaySt.statistics.viewCount}</p>
                            <i>•</i>
                            <p className="publish">{getDate(displaySn.snippet.publishedAt)}</p>
                        </div>
                    </div>
                    <div className="watchVideo__info__right">
                        <div className="btnContainer">
                            <button className="saveButton" onClick={addVideoHandler}>SAVE VIDEO</button>
                            <button className="saveButton">SAVE CHANNEL</button>
                        </div>
                    </div>
                    <div className="divider__line"></div>
                </>

            ) : (<h1>loading</h1>)}
        </div>

    )
}

export default WatchScreen
