import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../components/Sidebar';
import '../style/Search.css';
import "../style/SearchTwitch.css";
import { getYtSearch, getTwToken, getTwCategoriesByGame } from '../utils/API';
import ViewHandler from '../components/ViewHandler';

const Search = () => {
    let { id } = useParams();
    let [a, b] = id.split('&');
    let type = a.split('=')[1];
    let search = b.split('=')[1];
    let [display, setDisplay] = useState('');

    const handleDisplay = async () => {
        if (type === 'YT') {
            try {
                const response = await getYtSearch(search);
                if (!response.ok) {
                    throw new Error;
                };
                let { items } = await response.json();
                console.log(items);
                return items;
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
        }
        else {
            return (
                <h2>Please search for something!</h2>
            );
        }
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
        <div className="main__cont">
            {/* <Sidebar /> */}
            {display ? (
                <ViewHandler type={type} display={display} />
            ) : (
                <div className="">
                    <h1>loading</h1>
                </div>
            )}
        </div>
    );
};

export default Search;
