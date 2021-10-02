import React from 'react';
import { getYtSearch, getTwToken, getTwChannelsByGameID } from '../utils/API';

const GetAPI = () => {
    //Get back search results for keyword
    const handleSubmitYT = async (event) => {
        event.preventDefault();
        try {
            const response = await getYtSearch('johnny casH');
            if (!response.ok) {
                throw new Error("something went wrong!");
            };
            const { items } = await response.json();
            console.log(items);
        }
        catch (error) {
            console.error(error);
        };
    };
    //get back access token and expiration
    const handleSubmitTW = async (event) => {
        event.preventDefault();
        try {
            const response = await getTwToken();
            if (!response.ok) {
                throw new Error("something went wrong!");
            };
            const { access_token, expires_in } = await response.json();
            console.log(`access-token: ${access_token}`);
            console.log(`expires-in: ${expires_in}`);

            const channels = await getTwChannelsByGameID(access_token, '33214');
            const item = await channels.json();
            console.log(item);
        }
        catch (error) {
            console.error(error);
        };
    };


    return (
        <div>
            <form onSubmit={handleSubmitYT}>
                <button type="submit" style={{color:"black"}}>Youtube Search Keyword</button>
            </form>
            <form onSubmit={handleSubmitTW}>
                <button type="submit" style={{color:"black"}}>Twitch access token</button>
            </form>
        </div>
    );
};

export default GetAPI;