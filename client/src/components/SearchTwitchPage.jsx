import React, { useState, useEffect } from "react";
import "../style/SearchTwitch.css";
import { Link } from "react-router-dom";
import { getTwChannelsByGameID, getTwToken } from '../utils/API';

const SearchPageTwitch = ({ item }) => {
    let letter = item.box_art_url.split('-52x72.jpg')[0];
    let newURL = `${letter}-200x300.jpg`;

    const [display, setDisplay] = useState('');
    const [viewerCount, setViewerCount] = useState('');

    const handleDisplay = async () => {
        try {
            const response = await getTwToken();
            if (!response.ok) {
                throw new Error("something went wrong!");
            };
            const { access_token, expires_in } = await response.json();
            try {
                const games = await getTwChannelsByGameID(access_token, item.id);

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

    const handleViewers = (temp) => {
        if (temp.length == 0) {
            setViewerCount('0');
            return;
        }
        let tempCount = 0;
        for (let i = 0; temp.length > i; i++) {
            tempCount = tempCount + temp[i].viewer_count;
        }
        setViewerCount(tempCount.toString());
        return;
    }

    useEffect(async () => {
        const temp = await handleDisplay();
        setDisplay(temp);
        handleViewers(temp);
    }, [item.id])

    return (
        <div className="card_wrapper" key={item.id}>
            <Link to={`/streamResults/${item.id}`} className="twitch__card">
                <div className="card_image_container">
                    <img className="card__image" src={newURL} />
                </div>
                <div>
                    <div className="category__title">{item.name}</div>
                    {viewerCount && (
                        <div className="category_viewers">{viewerCount} viewers</div>
                    )}
                </div>
            </Link>
        </div>

    );
}

export default SearchPageTwitch;
