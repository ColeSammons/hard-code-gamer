import React, { useState } from 'react';
import { getYtSearch, getTwToken, getTwChannelsByGameID, getTwCategoriesByGame, getTwTopGames } from '../utils/API';

const GetAPI = () => {

    const [searchYT, setSearchYT] = useState('');
    const [tokenTW, setTokenTW] = useState({ access_token: '', expires_in: '' });
    const [searchTWGameID, setSearchTWGameID] = useState('');
    const [searchTWGame, setSearchTWGame] = useState('');

    //Get back search results for keyword
    const handleSubmitYT = async (event) => {
        event.preventDefault();

        if (!searchYT) {
            return false;
        };

        try {
            const response = await getYtSearch(searchYT);
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
    const handleSubmitTWToken = async (event) => {
        event.preventDefault();

        try {
            const response = await getTwToken();
            if (!response.ok) {
                throw new Error("something went wrong!");
            };
            const { access_token, expires_in } = await response.json();
            console.log(`access-token: ${access_token}`);
            console.log(`expires-in: ${expires_in}`);
            setTokenTW({ access_token: access_token, expires_in: expires_in });
        }
        catch (error) {
            console.error(error);
        };
    };

    //get back game categories that match value entered
    const handleSubmitTWGame = async (event) => {
        event.preventDefault();

        if (!searchTWGame) {
            return false;
        };

        try {
            const games = await getTwCategoriesByGame(tokenTW.access_token, searchTWGame);
            const item = await games.json();
            console.log(item);
        }
        catch (error) {
            console.error(error);
        };
    };

    //get back <20 live channels for a game category, english only
    const handleSubmitTWChannel = async (event) => {
        event.preventDefault();

        if (!searchTWGameID) {
            return false;
        };

        try {
            const channels = await getTwChannelsByGameID(tokenTW.access_token, searchTWGameID);
            const item = await channels.json();
            console.log(item);
        }
        catch (error) {
            console.error(error);
        };
    };

    const handleSubmitTWTopGames = async (event) => {
        event.preventDefault();

        try {
            const categories = await getTwTopGames(tokenTW.access_token);
            const item = await categories.json();
            console.log(item);
        }
        catch (error) {
            console.error(error);
        };
    };


    return (
        <div >
            <form onSubmit={handleSubmitYT}>
                <input type="text" className='testing-color' onChange={(e) => setSearchYT(e.target.value)} />
                <button type="submit" className='testing-color'>Youtube Search Keyword</button>
            </form>
            <br />
            <br />
            <form onSubmit={handleSubmitTWToken}>
                <button type="submit" className='testing-color'>Get a Twitch access token</button>
            </form>
            <h4 className='testing-color'>{JSON.stringify(tokenTW)}</h4>
            <form onSubmit={handleSubmitTWGame}>
                <input type="text" className='testing-color' onChange={(e) => setSearchTWGame(e.target.value)} />
                <button type="submit" className='testing-color'>Twitch search by game</button>
            </form>
            <form onSubmit={handleSubmitTWChannel}>
                <input type="text" className='testing-color' onChange={(e) => setSearchTWGameID(e.target.value)} />
                <button type="submit" className='testing-color'>Twitch search for channels by game ID (33214 for ex)</button>
            </form>
            <form onSubmit={handleSubmitTWTopGames}>
                <button type="submit" className='testing-color'>Twitch top games</button>
            </form>
        </div>
    );
};

export default GetAPI;