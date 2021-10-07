import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar';
import StreamerResults from "../components/StreamerResults";
import { useParams } from 'react-router';
import { getTwChannelsByGameID, getTwToken } from '../utils/API';

const StreamerResultsPage = () => {
    let { id } = useParams();
    let [display, setDisplay] = useState('');

    const handleDisplay = async () => {
        try {
            const response = await getTwToken();
            if (!response.ok) {
                throw new Error("something went wrong!");
            };
            const { access_token, expires_in } = await response.json();
            console.log(`access-token: ${access_token}`);
            console.log(`expires-in: ${expires_in}`);
            try {
                const games = await getTwChannelsByGameID(access_token, id);
                console.log(games);

                const data = await games.json();

                return data.data;
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
        async function handle() {
            const temp = await handleDisplay();
            setDisplay(temp);
            // console.log(temp);
        };
        handle();
    }, [id])

    return (
        <div className="app__main">
            <Sidebar />
            {display ? (
                <div className="main__container">
                    {display.map(item => (
                        <StreamerResults item={item} />
                    ))}

                </div>
            ) : (<h1>loading</h1>)}
        </div>
    )
}

export default StreamerResultsPage;
