import React, { useEffect, useState } from 'react';
import SearchResultsYT from '../components/SearchResultsYT';
import SearchTwitchPage from './SearchTwitchPage';

const ViewHandler = ({ type, display }) => {
    let [YT, setYT] = useState(false);
    let [TW, setTW] = useState(false);

    useEffect(() => {
        if (type == 'YT') {
            setYT('true');
        }
        if (type === 'TW') {
            setTW('true');
        }
    }, [YT, TW]);

    return (
        <>
            {YT ? (
                <div key="YT_display">
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
                <div key="TW_display">
                    <h2 className="text-center">Games</h2>
                    <div className="category_container">
                        {display.map((item) => (
                            <SearchTwitchPage item={item} />
                        ))}
                    </div>
                </div>
            ) : (null)}
        </>
    );
};

export default ViewHandler;