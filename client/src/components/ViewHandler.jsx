import React, { useEffect, useState } from 'react';
import SearchResultsYT from '../components/SearchResultsYT';
import SearchTwitchPage from './SearchTwitchPage';

const ViewHandler = ({ type, display }) => {
    console.log(type, display);
    let [YT, setYT] = useState(false);
    let [TW, setTW] = useState('');

    useEffect(() => {
        if (type == 'YT') {
            console.log(true)
            setYT('true');
        }
        if (type === 'TW') {
            setTW('true');
        }
    }, [YT, TW])

    return (
        <>
            {YT ? (
                <div>
                    {display ? (
                        <div className="search__container">
                            {display.map((item) => (
                                <SearchResultsYT item={item} />
                            ))}
                        </div>
                    ) : (
                        <div className="search__container">
                            <h1>loading</h1>
                        </div>
                    )}
                </div>
            ) : (null)}
            {TW ? (
                <div className="twitch__results">
                <h2>Games</h2>
                <div className="twitch__categories">
                    {display ? (
                        <div className="twitch__card">
                            {display.map((item) => (
                                <SearchTwitchPage item={item} />
                            ))}
                        </div>
                    ) : (
                            <h1>loading</h1>
                    )}
                </div>
            </div>
            ) : (null)}
        </>
    );
};

export default ViewHandler;