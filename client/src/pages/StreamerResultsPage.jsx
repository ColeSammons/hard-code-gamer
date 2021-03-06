import React, { useState, useEffect } from 'react'
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
            try {
                const games = await getTwChannelsByGameID(access_token, id);

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

    useEffect(async () => {
        const temp = await handleDisplay();
        setDisplay(temp);
    }, [id])

    return (
        <div className="stream_container main__color" key="stream-results-container">
            {display ? (
                <>
                    {display.map(item => (
                        <StreamerResults item={item} />
                    ))}
                </>
            ) : (<h1>loading</h1>)}
        </div>
    )
}

export default StreamerResultsPage;
